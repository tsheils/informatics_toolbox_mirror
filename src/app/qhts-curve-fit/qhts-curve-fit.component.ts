import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Tool} from "../models/tool";

@Component({
  selector: 'app-qhts-curve-fit',
  templateUrl: './qhts-curve-fit.component.html',
  styleUrls: ['./qhts-curve-fit.component.css']
})
export class QhtsCurveFitComponent implements OnInit {
    tool: Tool;
    imgSrcBase : string;
    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.subscribe(res => {
            this.tool = res.tool;
            this.imgSrcBase = '../../assets/images/' + this.tool.toolName.toLowerCase().replace(/ /g, '-');
        });
    }
}
