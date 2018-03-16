import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Tool} from "../models/tool";

@Component({
  templateUrl: './resolver.component.html',
  styleUrls: ['./resolver.component.css']
})

export class ResolverComponent implements OnInit {
    resolverCtrl = new FormControl();
    error: string;
    imgSrc: string;
    imgSrcBase: string;
    properties: string[] = [];
    @Input() tool: Tool;

  ngOnInit() {
  }

    addProperty(property: string): void {
        const index = this.properties.indexOf(property);

        if (index >= 0) {
            this.properties.splice(index, 1);
        } else {
            this.properties.push(property);
        }
    }

    resolve(): void {
    console.log(this.resolverCtrl.value);
  }
}
