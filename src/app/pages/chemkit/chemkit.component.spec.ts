import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChemkitComponent} from './chemkit.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {MaterialModule} from "../../../assets/material/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MarkdownViewerComponent} from "../../templates/markdown-viewer/markdown-viewer.component";
import {Tool} from "../../models/tool";
import {NCATSImage} from "../../models/ncatsimage";

describe('ChemkitComponent', () => {
  let component: ChemkitComponent;
  let fixture: ComponentFixture<ChemkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          MarkdownViewerComponent,
          ChemkitComponent
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
    fixture = TestBed.createComponent(ChemkitComponent);
    component = fixture.componentInstance;
    component.tool = new Tool({
      'toolName': 'chemkit',
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
