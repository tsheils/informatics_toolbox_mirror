import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Tool } from '../../models/tool';
import { ResolverService } from './services/resolver.service';
import { MatPaginator, MatSort, MatTableDataSource, MatExpansionModule } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Option } from './option';
import { OptionsManager } from './options-manager';

export interface DOMTokenList {
    replace(oldToken: string, newToken: string): void;
}

@Component({
    templateUrl: './resolver.component.html',
    styleUrls: ['./resolver.component.scss']
})
export class ResolverComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() tool: Tool;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('datalist') datalist: ElementRef;

    resolverCtrl = new FormControl();
    file: any;
    link: HTMLAnchorElement;
    data: any;
    imgSrcBase: string;
    // properties: string[] = [];
    names = false;
    loaded = false;
    showTableData = false;
    rawData: string;
    fields: string[];
    // options: Option[];
    // categories: { [category: string]: Array<Option> } = {};
    // priorityOptions: { [category: string]: number } = {
    //     'qhts': 3,
    //     'smiles': 2,
    //     'lychi': 1,
    // };
    previouslyUsedOptions: {
        [option: string]: {
            count: number,
            selectedLast: boolean
        }
    } = {};
    // categoryNames: Array<string> = [];
    dataSource = new MatTableDataSource<any[]>([]);
    private ngUnsubscribe: Subject<any> = new Subject();
    private contentElement: HTMLElement;
    private scrollToTopElement: HTMLElement;
    private resultsElement: HTMLElement;
    private bodyElement: HTMLElement;
    isLoading = true;
    resolveButtonLabel = 'Resolve';
    isResultsExpanded = false;
    optionsFilterTimer: any;
    filteredOptions: Array<Option>;
    optionsManager: OptionsManager;

    constructor(
        private resolverService: ResolverService,
        private elementRef: ElementRef
    ) { }
    ngOnInit() {
        const previouslyUsedOptions = JSON.parse(localStorage.getItem('previouslyUsedOptions')) || {};
        const lastUsedOptions = JSON.parse(localStorage.getItem('lastUsedOptions')) || {};
        console.log(previouslyUsedOptions);
        const keys = Object.keys(previouslyUsedOptions);
        if (keys && keys.length > 0) {
            if (typeof previouslyUsedOptions[keys[0]] === 'number') {
                keys.forEach(key => {
                    this.previouslyUsedOptions[key] = {
                        count: previouslyUsedOptions[key],
                        selectedLast: lastUsedOptions[key] != null
                    };
                });
            } else {
                this.previouslyUsedOptions = previouslyUsedOptions;
            }
        }

        // let priorityOptionNames;

        // if (Object.keys(this.lastUsedOptions).length > 0 || Object.keys(this.previouslyUsedOptions).length > 0) {
        //     // this.priorityOptions = {};

        //     priorityOptionNames = [];

        //     Object.keys(this.lastUsedOptions).forEach(key => {
        //         // this.priorityOptions[key] = this.lastUsedOptions[key];
        //         // this.properties.push(key);
        //         priorityOptionNames.push(key);
        //     });

        //     Object.keys(this.previouslyUsedOptions).forEach((key) => {
        //         if (!priorityOptionNames.includes(key) && priorityOptionNames.length < 6) {
        //             priorityOptionNames.push(key);
        //         }
        //     });
        // }

        this.resolverService.getOptions()
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(options => {
                this.optionsManager = new OptionsManager(options, this.previouslyUsedOptions);
                // this.optionsManager.setSelectedOptions(priorityOptionNames, Object.keys(this.lastUsedOptions).length || null);
                this.isLoading = false;
                // res.forEach(option => {

                //     if (this.priorityOptions[option.name] != null) {
                //         if (this.categories[priorityOptionsCategoryName] == null) {
                //             this.categories[priorityOptionsCategoryName] = [];
                //             this.categoryNames.unshift(priorityOptionsCategoryName);
                //         }

                //         if (this.categories[priorityOptionsCategoryName].length === 0
                //             || this.priorityOptions[option.name]
                //             <= this.priorityOptions[this.categories[priorityOptionsCategoryName]
                //             [this.categories[priorityOptionsCategoryName].length - 1].name]) {
                //             this.categories[priorityOptionsCategoryName].push(option);
                //         } else {
                //             for (let i = 0; i < this.categories[priorityOptionsCategoryName].length; i++) {
                //                 if (this.priorityOptions[option.name] > this.priorityOptions[this.categories
                //                 [priorityOptionsCategoryName][i].name]) {
                //                     this.categories[priorityOptionsCategoryName].splice(i, 0, option);
                //                     break;
                //                 }
                //             }
                //         }
                //     } else {

                //         if (option.tags == null && option.tags.length === 0) {
                //             option.tags = ['category-misc'];
                //         }

                //         option.tags.forEach(tag => {
                //             if (tag.indexOf('category-') > -1) {
                //                 const category = tag.split('category-').pop();
                //                 if (this.categories[category] == null) {
                //                     this.categories[category] = [];
                //                     this.categoryNames.push(category);
                //                 }

                //                 if (this.categories[category].length === 0
                //                     || option.title >= this.categories[category][this.categories[category].length - 1].title) {
                //                     this.categories[category].push(option);
                //                 } else {
                //                     for (let i = 0; i < this.categories[category].length; i++) {
                //                         if (option.title < this.categories[category][i].title) {
                //                             this.categories[category].splice(i, 0, option);
                //                             break;
                //                         }
                //                     }
                //                 }
                //             }
                //         });
                //     }
                // });
                // this.options = res;
            });

        this.resolverCtrl.valueChanges.subscribe(val => this.names = true);
        this.link = document.createElement('a');
        this.link.hidden = true;
    }

    resolve(): void {
        this.isLoading = true;
        this.resolveButtonLabel = 'Resolving...';
        this.rawData = '';
        this.dataSource.data = [];
        let dataArr = [];
        const lines = [];
        const properties = this.optionsManager.selectedOptionNames;
        this.resolverService.resolveData(properties, this.resolverCtrl.value.trim().split(/[\t\n,;]+/)).subscribe(res => {
            dataArr = res.map(data => {
                const ret: any = {};
                if (data.response) {
                    const arr = data.response.split('\t');
                    properties.forEach((value, index) => {
                        ret[value] = arr[index];
                    });
                }
                ret._id = +data.id;
                ret.input = data.input;
                ret.source = data.source;
                ret.url = data.url;
                this.fields = Object.keys(ret).sort((a, b) => +(b === 'input') - +(a === 'input')).filter(field => field !== '_id');
                lines.push(this.fields.map(field => ret[field]).join('\t'));
                return ret;
            });
            dataArr = dataArr.sort((a, b) => a._id - b._id);
            this.dataSource.data = dataArr;
            this.rawData = lines.join('\n');
            this.loaded = true;
            this.resolveButtonLabel = 'Resolved!';
            setTimeout(() => {
                this.resolveButtonLabel = 'Resolve';
                this.isLoading = false;
                this.processResponsiveness();
            }, 1000);
        }, error => {
            setTimeout(() => {
                this.resolveButtonLabel = 'Error!';
                this.isLoading = false;
            }, 2000);
        });
        console.log(this.previouslyUsedOptions);
        Object.keys(this.previouslyUsedOptions).forEach(key => {
            console.log(this.previouslyUsedOptions[key]);
            this.previouslyUsedOptions[key].selectedLast = false;
        });

        properties.forEach(property => {
            if (this.previouslyUsedOptions[property] == null) {
                this.previouslyUsedOptions[property] = {
                    count: 0,
                    selectedLast: true
                };
            }
            this.previouslyUsedOptions[property].count++;
            this.previouslyUsedOptions[property].selectedLast = true;
        });
        console.log(this.previouslyUsedOptions);
        localStorage.setItem('previouslyUsedOptions', JSON.stringify(this.previouslyUsedOptions));
    }

    processResponsiveness(): void {
        if (window.innerWidth <= 1250 && window.innerWidth > 820) {
            // this.contentElement.classList.replace('step-1', 'step-2');
            this.contentElement.classList.add('step-2');
            this.contentElement.classList.remove('step-1');
        } else if (window.innerWidth <= 820) {
            // this.contentElement.classList.replace('step-2', 'step-3');
            this.contentElement.classList.add('step-3');
            this.contentElement.classList.remove('step-2');
        }
    }

    backFromResults(): void {
        if (window.innerWidth <= 1250 && window.innerWidth > 820) {
            // this.contentElement.classList.replace('step-2', 'step-1');
            this.contentElement.classList.add('step-1');
            this.contentElement.classList.remove('step-2');
        } else if (window.innerWidth <= 820) {
            // this.contentElement.classList.replace('step-3', 'step-2');
            this.contentElement.classList.add('step-2');
            this.contentElement.classList.remove('step-3');
        }
    }

    nextFromValues(): void {
        // this.contentElement.classList.replace('step-1', 'step-2');
        this.contentElement.classList.add('step-2');
        this.contentElement.classList.remove('step-1');
    }

    backFromOptions(): void {
        // this.contentElement.classList.replace('step-2', 'step-1');
        this.contentElement.classList.add('step-1');
        this.contentElement.classList.remove('step-2');
    }

    // checked(event: any, property: string) {
    //     if (event.checked) {
    //         this.properties.push(property);
    //     } else {
    //         this.properties = this.properties.filter(prop => prop !== property);
    //     }
    // }

    allowResolve(): boolean {
        return this.optionsManager && this.optionsManager.selectedOptionNames.length === 0 || !this.names;
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        setTimeout(() => {
            this.contentElement = this.elementRef.nativeElement.querySelector('.content-container');
            this.contentElement.classList.add('step-1');
            this.processWindowResize();
            window.addEventListener('resize', () => {
                this.processWindowResize();
            });
            const elements = document.getElementsByClassName('scroll-to-top');
            if (elements && elements.length) {
                this.scrollToTopElement = elements[0] as HTMLElement;
                this.scrollToTopElement.style.display = 'none';
            }
            this.resultsElement = this.elementRef.nativeElement.querySelector('.results-container');
            this.bodyElement = document.getElementsByTagName('body')[0];
            this.bodyElement.appendChild(this.link);
        });
    }

    processWindowResize(): void {
        this.contentElement.style.height = `${window.innerHeight.toString()}px`;
        this.contentElement.style.maxHeight = `${window.innerHeight.toString()}px`;
        this.contentElement.scrollIntoView({ behavior: 'smooth' });
        if (window.innerWidth > 820 && this.contentElement.classList.contains('step-3')) {
            // this.contentElement.classList.replace('step-3', 'step-2');
            this.contentElement.classList.add('step-2');
            this.contentElement.classList.remove('step-3');
        } else if (window.innerWidth < 1250) {
            if (this.isResultsExpanded) {
                if (window.innerWidth > 820) {
                    // this.contentElement.classList.replace('step-1', 'step-2');
                    this.contentElement.classList.add('step-2');
                    this.contentElement.classList.remove('step-1');
                } else {
                    // this.contentElement.classList.replace('step-1', 'step-3');
                    this.contentElement.classList.add('step-3');
                    this.contentElement.classList.remove('step-1');
                }
                this.shrinkResults(true);
            }
        }
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    downloadJSON(): void {
        // this.file = new Blob([JSON.stringify(this.dataSource.data)], { type: 'text/plain'});
        // this.link.href = 'data:text/json;charset=utf-8,' + encodeURI(JSON.stringify(this.dataSource.data));
        // this.link.download = 'resolver.json';
        // this.link.target = '_blank';
        this.downloadFile('json', JSON.stringify(this.dataSource.data));
    }

    downloadCSV(): void {
        const fields = this.fields.map(field => `"${field.replace(/"/g, '\"')}"`);
        const dataKeys = this.fields.join(',');
        const lines = [];
        this.dataSource.data.forEach(data => lines.push(this.fields.map(field => `"${data[field].replace(/"/g, '\"')}"`).join(',')));
        const csv = dataKeys + '\n' + lines.join('\n');
        // this.file = new Blob([csv], { type: 'text/csv'});
        // this.link.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        // this.link.target = '_blank';
        // this.link.download = 'resolver.csv';
        this.downloadFile('csv', csv);
    }

    downloadFile(format: string, data: string): void {
        // this.link.href = window.URL.createObjectURL(this.file);
        // this.link.click();
        // window.open(this.link.href);
        this.link.href = `data:text/${format};charset=utf-8,${encodeURI(data)}`;
        this.link.target = '_blank';
        this.link.download = `resolver.${format}`;
        // this.downloadFile();
        this.link.click();
    }

    showTable(event: any): void {
        this.showTableData = event.checked;
    }

    // getLabel(field: string): string {
    //     let ret: string;
    //     const option: Option[] = this.options.filter(opt => opt.name === field);
    //     if (option.length > 0) {
    //         ret = option[0].title;
    //     } else {
    //         ret = field;
    //     }
    //     return ret;
    // }

    replacePipes(stringToEval: string): string {
        if (typeof stringToEval === 'string') {
            stringToEval = stringToEval.replace(/\|/g, ' ');
        }

        return stringToEval;
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        window.URL.revokeObjectURL(this.link.href);
        if (this.scrollToTopElement != null) {
            this.scrollToTopElement.style.display = 'block';
        }
        this.bodyElement.removeChild(this.link);
    }

    expandResults() {
        this.bodyElement.style.overflow = 'hidden';
        this.resultsElement.classList.add('full-page');
        this.isResultsExpanded = true;
    }

    shrinkResults(noAnimation?: boolean) {
        if (noAnimation == null || !noAnimation) {
            this.resultsElement.classList.add('shrink-animation');
            setTimeout(() => {
                this.resultsElement.classList.remove('full-page');
                this.resultsElement.classList.remove('shrink-animation');
                this.isResultsExpanded = false;
                this.bodyElement.style.overflow = null;
            }, 300);
        } else {
            this.resultsElement.classList.remove('full-page');
            this.isResultsExpanded = false;
            this.bodyElement.style.overflow = null;
        }
    }
}
