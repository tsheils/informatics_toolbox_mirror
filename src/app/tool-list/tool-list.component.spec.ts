import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolListComponent } from './tool-list.component';
import {MaterialModule} from '../../assets/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Tool} from '../models/tool';
import {ToolComponent} from '../tool/tool.component';
import {AppRoutingModule} from '../app-routing.module';
import {ToolDetailsComponent} from '../tool-details/tool-details.component';
import {ToolBasicsComponent} from '../tool-basics/tool-basics.component';
import {APP_BASE_HREF} from '@angular/common';
import {DataLoaderService} from '../services/data-loader.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ToolFiltersComponent} from "../tool-filters/tool-filters.component";

describe('ToolListComponent', () => {
  let component: ToolListComponent;
  let fixture: ComponentFixture<ToolListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
          MaterialModule,
            AppRoutingModule,
            FlexLayoutModule,
            HttpClientModule
        ],
        providers: [
            DataLoaderService,
            {provide: APP_BASE_HREF, useValue: '/' },
        ],
      declarations: [
          ToolComponent,
          ToolBasicsComponent,
          ToolDetailsComponent,
          ToolFiltersComponent,
          ToolListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolListComponent);
    component = fixture.componentInstance;
      component.tools = [new Tool({
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
      })];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
