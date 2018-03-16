import {Component, Input, OnInit} from '@angular/core';
import {Tool} from '../models/tool';
import {UnfurlingMetaService} from '../services/unfurling-meta.service';
import {environment} from "../../environments/environment.prod";

@Component({
  selector: 'app-tool-basics',
  templateUrl: './tool-basics.component.html',
  styleUrls: ['./tool-basics.component.css']
})
export class ToolBasicsComponent implements OnInit {
  @Input() tool: Tool;
    imgSrc: string;
    imgSrcBase: string;

  constructor(private unfurlingMetaService: UnfurlingMetaService) { }

  ngOnInit() {
      this.imgSrcBase = './assets/images/' + this.tool.toolName.toLowerCase().replace(/ /g, '-');
      this.imgSrc = this.imgSrcBase + '/primary.png';
      this.unfurlingMetaService.setMetaData(this.tool);
  }

}
