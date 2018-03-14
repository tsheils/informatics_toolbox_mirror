import {Component, Input, OnInit} from '@angular/core';
import {Tool} from '../models/tool';

@Component({
  selector: 'app-java-web-start',
  templateUrl: './java-web-start.component.html',
  styleUrls: ['./java-web-start.component.css']
})
export class JavaWebStartComponent implements OnInit {
    @Input() tool: Tool;

  constructor() { }

  ngOnInit() {
  }

}
