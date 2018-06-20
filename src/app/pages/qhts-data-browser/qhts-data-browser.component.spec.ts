import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QhtsDataBrowserComponent } from './qhts-data-browser.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "../../assets/material/material.module";
import {ScreenshotDisplayComponent} from "../screenshot-display/screenshot-display.component";
import {JavaWebStartComponent} from "../java-web-start/java-web-start.component";
import {Tool} from "../models/tool";

describe('QhtsDataBrowserComponent', () => {
  let component: QhtsDataBrowserComponent;
  let fixture: ComponentFixture<QhtsDataBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            MaterialModule,
            FlexLayoutModule
        ],
      declarations: [
          QhtsDataBrowserComponent,
          JavaWebStartComponent,
          ScreenshotDisplayComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QhtsDataBrowserComponent);
    component = fixture.componentInstance;
      component.tool = new Tool({
          "toolName":"C911 Calculator",
          "category":"public website",
          "url":"http://rnai.nih.gov/haystack/C911Calc.html",
          "contact":"Eugen Buehler",
          "description":"This is a simple JavaScript calculator that generates C911 controls for a set of existing target sequences",
          "toolType":"website",
          "note":"Needs Counter",
          "collaborators":'',
          "visibility":"External",
          "obsolete":"No",
          "audience":"Biologists",
          "codebase":"",
          "publicCodebase":"Yes",
          "parentProject":"",
          "image":"",
          "component":""
      });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
