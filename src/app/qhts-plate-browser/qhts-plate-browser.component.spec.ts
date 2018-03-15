import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QhtsPlateBrowserComponent } from './qhts-plate-browser.component';
import {JavaWebStartComponent} from "../java-web-start/java-web-start.component";
import {ToolBasicsComponent} from "../tool-basics/tool-basics.component";
import {ToolDetailsComponent} from "../tool-details/tool-details.component";
import {ToolListComponent} from "../tool-list/tool-list.component";
import {ToolComponent} from "../tool/tool.component";
import {ScreenshotDisplayComponent} from "../screenshot-display/screenshot-display.component";
import {APP_BASE_HREF} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "../../assets/material/material.module";
import {NCATSImage} from "../models/ncatsimage";
import {Tool} from "../models/tool";

describe('QhtsPlateBrowserComponent', () => {
  let component: QhtsPlateBrowserComponent;
  let fixture: ComponentFixture<QhtsPlateBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            MaterialModule,
            FlexLayoutModule,
            AppRoutingModule,
            FormsModule,
            ReactiveFormsModule
        ],
        providers: [
            {provide: APP_BASE_HREF, useValue: '/' },
        ],
        declarations: [
            ScreenshotDisplayComponent,
            ToolComponent,
            ToolListComponent,
            ToolDetailsComponent,
            ToolBasicsComponent,
            JavaWebStartComponent,
            QhtsPlateBrowserComponent
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QhtsPlateBrowserComponent);
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
      component.images = [
          new NCATSImage({url: this.imgSrcBase + '/primary.png', caption: 'Compare dose responses across assays.'}),
          new NCATSImage({url: this.imgSrcBase + '/browse.png', caption: 'At a glance browse qHTS data for large data sets. '}),
          new NCATSImage({url: this.imgSrcBase + '/helper.png', caption: 'Heat Map client helper.'})
      ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
