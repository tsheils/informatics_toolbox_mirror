import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBasicsComponent } from './tool-basics.component';
import {Tool} from '../models/tool';
import {MaterialModule} from '../../assets/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {UnfurlingMetaService} from '../services/unfurling-meta.service';

describe('ToolBasicsComponent', () => {
  let component: ToolBasicsComponent;
  let fixture: ComponentFixture<ToolBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          MaterialModule,
          FlexLayoutModule
        ],
        providers: [UnfurlingMetaService],
      declarations: [ ToolBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBasicsComponent);
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
