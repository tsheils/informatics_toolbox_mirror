import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataLoaderService} from '../services/data-loader.service';
import {Tool} from '../models/tool';
import {SelectionModel} from '@angular/cdk/collections';
import {Subject} from 'rxjs/index';
import {LoadingService} from "../services/loading.service";


@Component({
    selector: 'app-tool-list',
    templateUrl: './tool-list.component.html',
    styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit, OnDestroy {
    value: string;
    tools: Tool[] = [];
    filteredTools: any[] = [];
    count = 0;
    filteredToolsCount = 0;
    audiences: string[] = [];
    toolTypes: string[] = [];
    filterSelection = new SelectionModel<string>(true, []);
    private ngUnsubscribe: Subject<any> = new Subject();
    loading = false;


    constructor(
        private dataLoaderService: DataLoaderService,
        private loadingService: LoadingService
                ) { }

    ngOnInit() {
        console.log(this);
        this.loadingService.loading$.subscribe(res => this.loading = res);
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
             this.loadingService.toggleVisible(false);
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
