import {Component, Input, OnInit} from '@angular/core';
import {Tool} from "../../models/tool";

@Component({
  selector: 'app-iqc-convert',
  templateUrl: './iqc-convert.component.html',
  styleUrls: ['./iqc-convert.component.css']
})
export class IqcConvertComponent implements OnInit {
    @Input() tool: Tool;
    selected: string ='Response';
  constructor() { }

  ngOnInit() {
  }

  convert():void {

  }
}
