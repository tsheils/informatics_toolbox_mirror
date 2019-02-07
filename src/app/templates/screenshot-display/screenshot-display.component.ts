import {Component, Input, OnInit} from '@angular/core';
import {NCATSImage} from '../../models/ncatsimage';
@Component({
  selector: 'app-screenshot-display',
  templateUrl: './screenshot-display.component.html',
  styleUrls: ['./screenshot-display.component.css']
})
export class ScreenshotDisplayComponent implements OnInit {
  @Input() images: NCATSImage[];
  @Input() size: number;
  constructor() { }

  ngOnInit() {
  }

}
