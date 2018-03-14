import {Component, Input, OnInit} from '@angular/core';
import {Tool} from "../models/tool";

@Component({
  templateUrl: './qhts-curve-fit.component.html',
  styleUrls: ['./qhts-curve-fit.component.css']
})
export class QhtsCurveFitComponent implements OnInit {
    @Input() tool: Tool;
    imgSrcBase : string;

    ngOnInit() {
            this.imgSrcBase = '../../assets/images/' + this.tool.toolName.toLowerCase().replace(/ /g, '-');
    }
}
