import {Component, Input, OnInit} from '@angular/core';
import {Tool} from '../models/tool';
import {UnfurlingMetaService} from '../services/unfurling-meta.service';
import {environment} from '../../environments/environment.prod';
import {EmailLookupService} from "../services/email-lookup.service";

@Component({
  selector: 'app-tool-basics',
  templateUrl: './tool-basics.component.html',
  styleUrls: ['./tool-basics.component.css']
})
export class ToolBasicsComponent implements OnInit {
  @Input() tool: Tool;
    imgSrc: string;
    imgSrcBase: string;
    informaticists: any[] = [];

  constructor(
      private unfurlingMetaService: UnfurlingMetaService,
      private emailLookupService: EmailLookupService
  ) { }

  ngOnInit() {
      this.imgSrcBase = './assets/images/' + this.tool.toolName.toLowerCase().replace(/ /g, '-');
      this.imgSrc = this.imgSrcBase + '/primary.png';
      this.unfurlingMetaService.setMetaData(this.tool);
      this.tool.contact.forEach(contact =>
          this.informaticists.push({name: contact, email: this.emailLookupService.getEmail(contact)}));
    console.log(this);
  }

}
