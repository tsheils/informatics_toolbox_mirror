import {Component, Input, OnInit} from '@angular/core';
import {NCATSImage} from '../../models/ncatsimage';
import {Tool} from '../../models/tool';

@Component({
  selector: 'app-scaffold-hopper',
  templateUrl: './scaffold-hopper.component.html',
  styleUrls: ['./scaffold-hopper.component.css']
})
export class ScaffoldHopperComponent implements OnInit {
    @Input() tool: Tool;
    imgSrcBase: string;
    images: NCATSImage[];

    ngOnInit() {
        this.imgSrcBase = './assets/images/' + this.tool.toolName.toLowerCase().replace(/ /g, '-');
        this.images = [
            new NCATSImage({url: this.imgSrcBase + '/primary.png', caption: 'Use scaffold to view R-groups'}),
            new NCATSImage({url: this.imgSrcBase + '/hopper2.png', caption: 'View scaffold references'}),
            new NCATSImage({url: this.imgSrcBase + '/hopper3.png', caption: 'View network with references'})
        ];
    }
}
