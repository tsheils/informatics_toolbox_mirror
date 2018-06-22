import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataLoaderService} from '../services/data-loader.service';
import {Tool} from '../models/tool';
import {SelectionModel} from '@angular/cdk/collections';
import {Subject} from 'rxjs/index';


@Component({
    selector: 'app-tool-list',
    templateUrl: './tool-list.component.html',
    styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit, OnDestroy {
    value: string;
    tools: Tool[] = [];
    toolsArr: any[] = [];
    filteredTools: any[] = [];
    count = 0;
    filteredToolsCount = 0;
    selectedFilters: any[] = [];
    selectedFiltersMap: Map<string, string[]> = new Map<string, string[]>();
    audiences: string[] = [];
    toolTypes: string[] = [];
    filterSelection = new SelectionModel<string>(true, []);
    private ngUnsubscribe: Subject<any> = new Subject();


    constructor(private dataLoaderService: DataLoaderService) { }

    ngOnInit() {
        this.dataLoaderService.data$.subscribe(res => {
            this.filteredTools = [];
            this.filteredToolsCount = 0;
                // map to array
            res.forEach((value, key) => {
                this.filteredTools.push({parent: key, tools: value});
                this.filteredToolsCount += value.length;
            });
            this.audiences = this.dataLoaderService.getFields('audience');
            this.toolTypes = this.dataLoaderService.getFields('toolType');
            this.count = this.dataLoaderService.getCount();
        });

}

search(term: string): void {
        this.dataLoaderService.search(term);
    }

    clear(): void {
        this.value = '';
        this.dataLoaderService.search('');
    }

ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}
}
