import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QhtsCurveFitComponent } from './qhts-curve-fit.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../../../assets/material/material.module';
import {Tool} from '../../models/tool';
import {JavaWebStartComponent} from '../../templates/java-web-start/java-web-start.component';

describe('QhtsCurveFitComponent', () => {
  let component: QhtsCurveFitComponent;
  let fixture: ComponentFixture<QhtsCurveFitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            MaterialModule,
            FlexLayoutModule
        ],
      declarations: [
          QhtsCurveFitComponent,
          JavaWebStartComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QhtsCurveFitComponent);
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
