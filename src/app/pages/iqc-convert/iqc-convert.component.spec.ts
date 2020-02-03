import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IqcConvertComponent } from './iqc-convert.component';
import {MaterialModule} from "../../../assets/material/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('IqcConvertComponent', () => {
  let component: IqcConvertComponent;
  let fixture: ComponentFixture<IqcConvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IqcConvertComponent ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IqcConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
