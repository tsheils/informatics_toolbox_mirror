import {Component, Input, OnInit} from '@angular/core';
import {Tool} from "../models/tool";

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {
@Input() tool: Tool;
    imgSrcBase: string;
    imgSrc: string;
  constructor() { }

  ngOnInit() {
      this.imgSrcBase = '../../assets/images/' + this.tool.toolName.toLowerCase().replace(/ /g, '-');
      this.imgSrc = this.imgSrcBase + '/primary.png';
  }

}
