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
  constructor(private dataLoaderService: DataLoaderService) { }

  ngOnInit() {
      this.dataLoaderService.getData().subscribe(res => {
          res.forEach((value, key) => this.toolsArr.push({parent: key, tools: value}));
          this.filteredTools = this.toolsArr;
          this.toolsArr.reverse();
      });
  }

  filter(term: string): void {
      let filteredArr: any[] = [];
    this.toolsArr.forEach((values, key) => {
        let filtered: Tool[] = [];
        console.log(values);
        console.log(key);
        values.forEach(tool => {
            let str = Object.values(tool).join(' ').toLowerCase();
            if (str.includes(term.toLowerCase())) {
                filtered.push(tool);
            }
        });
        if (filtered.length > 0) {
            filteredArr.push({parent: key, tools: filtered})
        }
    });
    this.filteredTools = filteredArr;
  }
}
