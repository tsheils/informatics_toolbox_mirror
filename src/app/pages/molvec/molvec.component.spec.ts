import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolvecComponent } from './molvec.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {MaterialModule} from "../../../assets/material/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ScreenshotDisplayComponent} from "../../templates/screenshot-display/screenshot-display.component";
import {Tool} from "../../models/tool";
import {NCATSImage} from "../../models/ncatsimage";

describe('MolvecComponent', () => {
  let component: MolvecComponent;
  let fixture: ComponentFixture<MolvecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          ScreenshotDisplayComponent,
          MolvecComponent
      ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolvecComponent);
    component = fixture.componentInstance;
    component.tool = new Tool({
      'toolName': 'C911 Calculator',
      'category': 'public website',
      'url': 'http://rnai.nih.gov/haystack/C911Calc.html',
      'contact': 'Eugen Buehler',
      'description': 'This is a simple JavaScript calculator that generates C911 controls for a set of existing target sequences',
      'toolType': 'website',
      'note': 'Needs Counter',
      'collaborators': '',
      'visibility': 'External',
      'obsolete': 'No',
      'audience': 'Biologists',
      'codebase': '',
      'publicCodebase': 'Yes',
      'parentProject': '',
      'image': '',
      'component': ''
    });
    component.imgSrcBase  = './assets/images/' + component.tool.toolName.toLowerCase().replace(/ /g, '-');
    component.images = [
      new NCATSImage({url: component.imgSrcBase + '/primary.png', caption: 'Compare dose responses across assays.'}),
      new NCATSImage({url: component.imgSrcBase + '/browse.png', caption: 'At a glance browse qHTS data for large data sets. '}),
      new NCATSImage({url: component.imgSrcBase + '/helper.png', caption: 'Heat Map client helper.'})
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
