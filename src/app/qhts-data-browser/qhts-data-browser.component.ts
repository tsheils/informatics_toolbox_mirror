import { Component, OnInit } from '@angular/core';
import {Tool} from '../models/tool';
import {ActivatedRoute} from '@angular/router';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-qhts-data-browser',
  templateUrl: './qhts-data-browser.component.html',
  styleUrls: ['./qhts-data-browser.component.css']
})
export class QhtsDataBrowserComponent implements OnInit {
    tool: Tool;
    imgSrcBase : string;
    constructor(private route: ActivatedRoute,
                private metaService: Meta) {
    }

    ngOnInit() {
        this.route.data.subscribe(res => {
            this.tool = res.tool;
            this.imgSrcBase = '../../assets/images/' + this.tool.toolName.toLowerCase().replace(/ /g, '-');
        });

        console.log(this);
    }
}
