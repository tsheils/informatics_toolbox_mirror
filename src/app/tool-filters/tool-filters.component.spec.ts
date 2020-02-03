import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolFiltersComponent } from './tool-filters.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../../assets/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DataLoaderService} from '../services/data-loader.service';
import {LoadingService} from "../services/loading.service";

describe('ToolFiltersComponent', () => {
  let component: ToolFiltersComponent;
  let fixture: ComponentFixture<ToolFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
            FlexLayoutModule,
            HttpClientModule,
            MaterialModule
        ],
        providers: [
            DataLoaderService,
            LoadingService
        ],
      declarations: [ ToolFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
