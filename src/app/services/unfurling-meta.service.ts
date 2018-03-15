import { Injectable } from '@angular/core';
import {Tool} from '../models/tool';
import {Meta} from '@angular/platform-browser';

@Injectable()
export class UnfurlingMetaService {

    constructor( private metaService: Meta) {
    }


    setMetaData(tool: Tool): void {
        this.metaService.updateTag({
                content: tool.toolName
            },
            'property="og:description"'
        );
        this.metaService.updateTag({
                content: tool.description
            },
            'name="twitter:description"'
        );
        this.metaService.updateTag({
                content: tool.toolName
            },
            'property="og:title"'
        );
        this.metaService.updateTag({
                content: tool.toolName
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
    }
}
