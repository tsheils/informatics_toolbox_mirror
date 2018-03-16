import {Component, Input, OnInit} from '@angular/core';
import {Tool} from '../models/tool';
import {NCATSImage} from '../models/ncatsimage';

@Component({
  selector: 'app-qhts-heatmap-browser',
  templateUrl: './qhts-heatmap-browser.component.html',
  styleUrls: ['./qhts-heatmap-browser.component.css']
})
export class QhtsHeatmapBrowserComponent implements OnInit {
    @Input() tool: Tool;
    imgSrcBase: string;
    images: NCATSImage[];

    ngOnInit() {
        this.imgSrcBase = './assets/images/' + this.tool.toolName.toLowerCase().replace(/ /g, '-');
        this.images = [
            new NCATSImage({url: this.imgSrcBase + '/primary.png', caption: 'Compare dose responses across assays.'}),
            new NCATSImage({url: this.imgSrcBase + '/browse.png', caption: 'At a glance browse qHTS data for large data sets. '}),
            new NCATSImage({url: this.imgSrcBase + '/helper.png', caption: 'Heat Map client helper.'})
        ];
    }

}
