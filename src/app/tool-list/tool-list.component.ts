import { Component, OnInit } from '@angular/core';
import {DataLoaderService} from "../services/data-loader.service";
import {Tool} from "../models/tool";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-tool-list',
    templateUrl: './tool-list.component.html',
    styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {
    tools: Tool[] = [];
    toolsArr: any[] = [];
    filteredTools: any[] = [];
    count = 0;
    filteredToolsCount = 0;
    selectedFilters: any[] = [];
    audiences: string[] = [];
    toolTypes: string[] = [];

    constructor(private dataLoaderService: DataLoaderService) { }

    ngOnInit() {
        this.dataLoaderService.getData().subscribe(res => {
            res.forEach((value, key) => {
                this.toolsArr.push({parent: key, tools: value});
                this.count += value.length;
                this.filteredToolsCount = this.count;
            });
            this.filteredTools = this.toolsArr;
        });

        this.audiences = this.dataLoaderService.getFields('audience');
        this.toolTypes = this.dataLoaderService.getFields('toolType');
    }


    isSelected(filter: any): boolean {
        return this.selectedFilters.includes(filter);
    }


    selectFilter(property:string, filter: any): void {
        let index = this.selectedFilters.indexOf(filter);

        if (index >= 0) {
            this.selectedFilters.splice(index, 1);
            this.filteredTools = this.toolsArr;
            this.filteredToolsCount = this.count;
            if (this.selectedFilters.length > 0) {
                this.filter(property);
            }
        } else {
            this.selectedFilters.push(filter);
            this.filter(property);
        }
    }

    filter(property: string): void {
        this.filteredToolsCount = 0;
        const filteredArr: any[] = [];
        let filteredMap: Map<string, Tool[]> = new Map<string, Tool[]>();
        this.selectedFilters.forEach(filter=> {
        this.toolsArr.forEach(values => {
            let filtered: Tool[] = filteredMap.get(values.parent) ? filteredMap.get(values.parent) : [];
            values.tools.forEach(tool => {
                if (tool[property].includes(filter)) {
                    console.log(tool);
                    filtered.push(tool);
                }
            });
            if (filtered.length > 0) {
                filteredMap.set(values.parent, filtered);
            }
        });
        });
        filteredMap.forEach((value, key) => {
            value = Array.from(new Set([...value]));
            this.filteredToolsCount += value.length;
            filteredArr.push({parent: key, tools: value});
        });
        this.filteredTools = filteredArr;
    }

    search(term: string): void {
        this.filteredToolsCount = 0;
        let filteredArr: any[] = [];
        this.toolsArr.forEach(values => {
            let filtered: Tool[] = [];
            values.tools.forEach(tool => {
                let str = Object.values(tool).join(' ').toLowerCase();
                if (str.includes(term.toLowerCase())) {
                    filtered.push(tool);
                }
            });
            console.log(filtered);
            if (filtered.length > 0) {
                filteredArr.push({parent: values.parent, tools: filtered});
                this.filteredToolsCount += filtered.length;
            }
        });
        console.log(filteredArr);
        this.filteredTools = filteredArr;
    }
}
