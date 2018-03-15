import {Component, Input, OnInit} from '@angular/core';
import {Tool} from '../models/tool';
import {NCATSImage} from '../models/ncatsimage';

@Component({
  templateUrl: './qhts-sample-client.component.html',
  styleUrls: ['./qhts-sample-client.component.css']
})
export class QhtsSampleClientComponent implements OnInit {
    @Input() tool: Tool;
    imgSrcBase : string;
    images : NCATSImage[];

    ngOnInit() {
        this.imgSrcBase = '../../assets/images/' + this.tool.toolName.toLowerCase().replace(/ /g, '-');
        this.images = [
            new NCATSImage({url: this.imgSrcBase + '/primary.png', caption: 'Get structures, common names, Supplier IDs and additional information from a list of NCGC sample IDs.'}),
            new NCATSImage({url: this.imgSrcBase + '/structure-search.png', caption: 'Search by structure.'}),
        ];
    }
}
