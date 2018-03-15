import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCalculatorComponent } from './c-calculator.component';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../assets/material/material.module";
import {ToolListComponent} from "../tool-list/tool-list.component";
import {ToolDetailsComponent} from "../tool-details/tool-details.component";
import {ToolComponent} from "../tool/tool.component";
import {ToolBasicsComponent} from "../tool-basics/tool-basics.component";
import { APP_BASE_HREF } from '@angular/common';
import {ComponentNameService} from "../services/component-name.service";
import {LoadingService} from "../services/loading.service";
import {DataLoaderService} from "../services/data-loader.service";
import {Tool} from "../models/tool";

describe('CCalculatorComponent', () => {
  let component: CCalculatorComponent;
  let fixture: ComponentFixture<CCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            BrowserModule,
            HttpClientModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
            MaterialModule
        ],
        providers: [
            {provide: APP_BASE_HREF, useValue: '/c911 calculator' }
        ],
      declarations: [
          ToolListComponent,
          ToolDetailsComponent,
          ToolComponent,
          ToolBasicsComponent,
          CCalculatorComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCalculatorComponent);
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
