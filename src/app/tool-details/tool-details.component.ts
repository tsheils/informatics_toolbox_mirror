import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Meta } from '@angular/platform-browser';
import {Tool} from '../models/tool';

@Component({
  selector: 'app-tool-details',
  templateUrl: './tool-details.component.html',
  styleUrls: ['./tool-details.component.css']
})
export class ToolDetailsComponent implements OnInit, AfterViewChecked {
  tool: Tool;
    constructor(private route: ActivatedRoute,
                private metaService: Meta) {
    }

    ngOnInit() {
        this.route.data.subscribe(res => {
          console.log(res);
            this.tool = res.tool;
        });

        this.metaService.updateTag({
                content: this.tool.toolName
            },
            'property="og:description"'
        );
        this.metaService.updateTag({
                content: this.tool.description
            },
            'name="twitter:description"'
        );
        this.metaService.updateTag({
                content: this.tool.toolName
            },
            'property="og:title"'
        );
        this.metaService.updateTag({
                content: this.tool.toolName
            },
            'name="twitter:title"'
        );
        /*this.metaService.addTags([{
                content: window.location.href + '/assets/' + this.intern.mugshot,
                property: 'og:image'
            }, {
                content: window.location.href + '/assets/' + this.intern.mugshot,
                name: 'twitter:image'
            }],
            true
        );*/
        console.log(this);
    }

    ngAfterViewChecked() {
        window.scrollTo(0, 0);
    }
}
