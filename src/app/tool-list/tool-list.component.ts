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
filteredTools: Tool[] =[];
  constructor(private dataLoaderService: DataLoaderService) { }

  ngOnInit() {
      this.dataLoaderService.getData().subscribe(res => {
          this.tools = res;
          this.filteredTools = this.tools;
      });
  }

  filter(term: string): void {
    let filtered: Tool[] = [];
    this.tools.forEach(tool => {
      let str = Object.values(tool).join(' ');
        if(str.includes(term)) {
          filtered.push(tool);
        }
    });
    console.log(filtered);
    this.filteredTools = filtered;
  }
}
