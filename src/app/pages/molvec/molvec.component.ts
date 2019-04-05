import { Component, OnInit, Input } from '@angular/core';
import { Tool } from '../../models/tool';
import { NCATSImage } from '../../models/ncatsimage';

@Component({
  selector: 'app-molvec',
  templateUrl: './molvec.component.html',
  styleUrls: ['./molvec.component.css']
})
export class MolvecComponent implements OnInit {
  @Input() tool: Tool;
  imgSrcBase: string;
  images: NCATSImage[];

  constructor() { }

  ngOnInit() {
    this.imgSrcBase = './assets/images/' + this.tool.toolName.toLowerCase().replace(/ /g, '-');
    this.images = [
      new NCATSImage({
        url: this.imgSrcBase + '/image-1.png',
        caption: 'Go to the application server and select the “Image” tab'
      }),
      new NCATSImage({
        url: this.imgSrcBase + '/image-2.png',
        caption: 'You can either upload an image file (png, jpeg, gif, tif) directly, or you can copy/paste an ' +
        'image from the web or from your local computer. One common mechanism, for PDFs, is to use the snipping ' +
        'tool in Microsoft Windows (or equivalent tools in other operating systems) to select a screenshot of the ' +
        'structure area, and then paste it into the dashes line area in the application. To paste, you should use ' +
        '“control+v” (or command+v on Mac OS). You can also drag/drop an image file directly from a folder into the ' +
        'dashed line area.'
      }),
      new NCATSImage({
        url: this.imgSrcBase + '/image-3.png',
        caption: 'And paste it into the image tab using control+v'
      })
    ];
  }

}
