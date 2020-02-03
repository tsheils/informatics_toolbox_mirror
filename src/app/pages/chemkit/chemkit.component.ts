import {Component, Input, OnInit} from '@angular/core';
import {Tool} from '../../models/tool';

@Component({
  selector: 'app-chemkit',
  templateUrl: './chemkit.component.html',
  styleUrls: ['./chemkit.component.css']
})
export class ChemkitComponent implements OnInit {
    @Input() tool: Tool;
    readmeUrl: string;

  constructor() { }

  ngOnInit() {
      this.readmeUrl = `./assets/files/${this.tool.toolName.toLowerCase().replace(/ /g, '-')}/README.md`;
  }

}
