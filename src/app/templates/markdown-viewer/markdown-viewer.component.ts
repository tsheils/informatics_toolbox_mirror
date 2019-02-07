import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-markdown-viewer',
  templateUrl: './markdown-viewer.component.html',
  styleUrls: ['./markdown-viewer.component.css']
})
export class MarkdownViewerComponent implements OnInit {

  @Input() readme: string;
  constructor() { }

  ngOnInit() {
  }

}
