import {Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dragon-drop-image',
  templateUrl: './dragon-drop-image.component.html',
  styleUrls: ['./dragon-drop-image.component.scss']
})
export class DragonDropImageComponent implements OnInit {
  @ViewChild('dragDrop') canvasRef: ElementRef;
  @Output() readonly imagePasteEvent: EventEmitter<any> = new EventEmitter<any>();
  canvas: any;
 ctx: any;
  constructor() {}

  ngOnInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d');
  }

  @HostListener('paste', ['$event'])
  onPaste(e: ClipboardEvent) {
    const clipboardData = e.clipboardData;
    this.pasteImage(e);
  }
/*
  @HostListener('drop', ['$event'])
  onDrop(e) {
    e.stopPropagation();
    e.preventDefault();
    const clipboardData = e.clipboardData;
    this.pasteImage(e);
  }*/

  pasteImage(e) {
    if (e.clipboardData) {
      const items = e.clipboardData.items;
      if (!items) {
        return;
      }
      //access data directly
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          //image
          const blob = items[i].getAsFile();
          const URLObj = window.URL ;
          const source = URLObj.createObjectURL(blob);
          this.createImage(source);
        }
      }
      e.preventDefault();
    }
}

  createImage(source) {
    const pastedImage = new Image();
    pastedImage.onload = () => {
        // resize
        this.canvas.width = pastedImage.width;
        this.canvas.height = pastedImage.height;
      this.ctx.drawImage(pastedImage, 0, 0);
      this.imagePasteEvent.emit(this.canvas.toDataURL( 'image/png'));
    };
    pastedImage.src = source;
}
}

