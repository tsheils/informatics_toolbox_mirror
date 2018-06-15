import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Tool} from "../models/tool";
import {ResolverService} from "./services/resolver.service";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {ActivatedRoute} from "@angular/router";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
    templateUrl: './resolver.component.html',
    styleUrls: ['./resolver.component.css']
})

export class ResolverComponent implements OnInit {
    @Input() tool: Tool;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('datalist') datalist: ElementRef;

    resolverCtrl = new FormControl();
    file: any;
    link: any;
    data: any;
    imgSrcBase: string;
    properties: string[] = [];
    names = false;
    loaded = false;
    showTableData = false;
    rawData: string;
    fields: string[];
    options: Option[];
    dataSource = new MatTableDataSource<any[]>([]);
    private ngUnsubscribe: Subject<any> = new Subject();


    constructor(private resolverService: ResolverService){}
    ngOnInit() {
        this.resolverService.getOptions()
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(res => {
                this.options = res;
            });

        this.resolverCtrl.valueChanges.subscribe(val => this.names = true);
        this.link = document.createElement('a');
    }

    resolve(): void {
        this.rawData ='';
        this.dataSource.data = [];
        let data = [];
        let lines = [];
        this.resolverService.resolveData(this.properties, this.resolverCtrl.value.trim().split(/[\t\n,;]+/)).subscribe(res => {
            data = res.map(data => {
                const ret: any = {};
                if (data.response) {
                    const arr = data.response.split('\t');
                    this.properties.forEach((value, index) => {
                        ret[value] = arr[index];
                    });
                }
                ret._id = +data.id;
                ret.input = data.input;
                ret.source = data.source;
                ret.url = data.url;
                this.fields = Object.keys(ret).sort((a, b) => +(b === 'input') - +(a ==='input')).filter(field => field !== '_id');
                lines.push(this.fields.map(field => ret[field]).join('\t'));
                return ret;
            });
            data = data.sort((a,b) => a._id - b._id);
            this.dataSource.data = data;
            this.rawData =  lines.join('\n');
            this.loaded = true;
        });
    }

    checked(event: any, property: string) {
        if (event.checked) {
            this.properties.push(property)
        } else {
            this.properties = this.properties.filter(prop => prop !== property);
        }
    }

    allowResolve(): boolean {
        return this.properties.length === 0 || !this.names;
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    downloadJSON(): void {
        this.file = new Blob([JSON.stringify(this.dataSource.data)], { type: 'text/plain'});
        this.link.download = 'resolver.json';
        this.downloadFile();
    }

    downloadCSV(): void {
        const dataKeys = this.fields.join('\t');
        let lines = [];
        this.dataSource.data.forEach(data => lines.push(this.fields.map(field => data[field]).join('\t')));
        let csv = dataKeys + '\n' + lines.join('\n');
        this.file = new Blob([csv], { type: 'text/csv'});
        this.link.download = 'resolver.tsv';
        this.downloadFile();
    }

    downloadFile(): void {
        this.link.href = window.URL.createObjectURL(this.file);

         this.link.click();
         window.open( this.link.href);
    }

    showTable(event: any): void {
        this.showTableData = event.checked;
    }

    getLabel(field:string): string {
        let ret:string;
        const option: Option[] = this.options.filter(opt => opt.name === field);
        if(option.length > 0){
            ret = option[0].title;
        } else {
            ret = field;
        }
        return ret;
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        window.URL.revokeObjectURL(this.link.href);
    }
}

export class Option {
    title: string;
    format: string;
    name: string;
    description: string;
}