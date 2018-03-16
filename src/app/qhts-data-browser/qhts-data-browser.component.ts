import {Component, Input, OnInit} from '@angular/core';
import {Tool} from '../models/tool';
import {NCATSImage} from '../models/ncatsimage';

@Component({
  templateUrl: './qhts-data-browser.component.html',
  styleUrls: ['./qhts-data-browser.component.css']
})
export class QhtsDataBrowserComponent implements OnInit {
    @Input() tool: Tool;
    imgSrcBase: string;
    images: NCATSImage[];

    ngOnInit() {
            this.imgSrcBase = './assets/images/' + this.tool.toolName.toLowerCase().replace(/ /g, '-');
            this.images = [
                new NCATSImage({url: this.imgSrcBase + '/primary.png',
                    caption: 'qHTS client is the primary way to retrieve compound screening data.'}),
                new NCATSImage({url: this.imgSrcBase + '/query.png',
                    caption: 'Data can be retrieved based on a specific list of assay protocols, compounds, or potency ' +
                    'or efficacy of the compound response.'}),
                new NCATSImage({url: this.imgSrcBase + '/compare.png',
                    caption: 'It can be used to compare responses of a given compound across many different assays.'})
            ];
    }
}
