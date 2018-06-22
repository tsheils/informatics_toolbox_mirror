import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../../assets/material/material.module';
import {ToolBasicsComponent} from '../../tool-basics/tool-basics.component';
import { APP_BASE_HREF } from '@angular/common';
import { JavaWebStartComponent } from './java-web-start.component';
import {Tool} from '../../models/tool';
import {FlexLayoutModule} from "@angular/flex-layout";

describe('JavaWebStartComponent', () => {
  let component: JavaWebStartComponent;
  let fixture: ComponentFixture<JavaWebStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            BrowserAnimationsModule,
            FlexLayoutModule,
            MaterialModule
        ],
        providers: [
            {provide: APP_BASE_HREF, useValue: '/c911 calculator' }
        ],
        declarations: [
            ToolBasicsComponent,
            JavaWebStartComponent
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaWebStartComponent);
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
