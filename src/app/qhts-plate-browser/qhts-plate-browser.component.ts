import {Component, Input, OnInit} from '@angular/core';
import {Tool} from '../models/tool';
import {NCATSImage} from '../models/ncatsimage';

@Component({
  templateUrl: './qhts-plate-browser.component.html',
  styleUrls: ['./qhts-plate-browser.component.css']
})
export class QhtsPlateBrowserComponent implements OnInit {
    @Input() tool: Tool;
    imgSrcBase: string;
    images: NCATSImage[];

    ngOnInit() {
            this.imgSrcBase = '../../assets/images/' + this.tool.toolName.toLowerCase().replace(/ /g, '-');
            this.images = [
                new NCATSImage({url: this.imgSrcBase + '/primary.png',
                    caption: 'Quickly assess plates for screening artifacts and distortions. Get basic QC parameters ' +
                    'like Z’ and S/B.'}),
                new NCATSImage({url: this.imgSrcBase + '/concentration.png',
                    caption: 'Look for concentration-response titrations across plate series, which is another indicator' +
                    ' of a well-behaved assay.'}),
                new NCATSImage({url: this.imgSrcBase + '/plates.png',
                    caption: 'Note the top, left plate was accidentally loaded in an incorrect orientation for reading.'})
            ];
    }
}
