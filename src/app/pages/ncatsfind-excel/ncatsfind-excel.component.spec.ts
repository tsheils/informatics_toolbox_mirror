import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcatsFindExcelComponent } from './ncatsfind-excel.component';
import {MaterialModule} from "../../../assets/material/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {Tool} from "../../models/tool";
import {NCATSImage} from "../../models/ncatsimage";

describe('NcatsfindExcelComponent', () => {
  let component: NcatsFindExcelComponent;
  let fixture: ComponentFixture<NcatsFindExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcatsFindExcelComponent ],
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
    fixture = TestBed.createComponent(NcatsFindExcelComponent);
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
