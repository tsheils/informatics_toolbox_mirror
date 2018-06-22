import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolComponent } from './tool.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../assets/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {APP_BASE_HREF} from '@angular/common';
import {ComponentNameService} from '../services/component-name.service';
import {LoadingService} from '../services/loading.service';
import {DataLoaderService} from '../services/data-loader.service';
import {UnfurlingMetaService} from '../services/unfurling-meta.service';
import {AppComponent} from '../app.component';
import {NcatsHeaderComponent} from '../ncats-header/ncats-header.component';
import {NcatsFooterComponent} from '../ncats-footer/ncats-footer.component';
import {ToolListComponent} from '../tool-list/tool-list.component';
import {ToolDetailsComponent} from '../tool-details/tool-details.component';
import {JavaWebStartComponent} from '../pages/java-web-start/java-web-start.component';
import {CCalculatorComponent} from '../pages/c-calculator/c-calculator.component';
import {QhtsDataBrowserComponent} from '../pages/qhts-data-browser/qhts-data-browser.component';
import {ToolBasicsComponent} from '../tool-basics/tool-basics.component';
import {QhtsCurveFitComponent} from '../pages/qhts-curve-fit/qhts-curve-fit.component';
import {QhtsPlateBrowserComponent} from '../pages/qhts-plate-browser/qhts-plate-browser.component';
import {CustomContentDirective} from '../tool-details/custom-content.directive';
import {ScreenshotDisplayComponent} from '../screenshot-display/screenshot-display.component';
import {QhtsSampleClientComponent} from '../pages/qhts-sample-client/qhts-sample-client.component';
import {QhtsHeatmapBrowserComponent} from '../pages/qhts-heatmap-browser/qhts-heatmap-browser.component';
import {Tool} from '../models/tool';
import {ToolFiltersComponent} from "../tool-filters/tool-filters.component";

describe('ToolComponent', () => {
  let component: ToolComponent;
  let fixture: ComponentFixture<ToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            BrowserModule,
            HttpClientModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
            MaterialModule,
            FlexLayoutModule
        ],
        providers: [
            {provide: APP_BASE_HREF, useValue: '/' },
            ComponentNameService,
            LoadingService,
            DataLoaderService,
            UnfurlingMetaService
        ],
        declarations: [
            NcatsHeaderComponent,
            NcatsFooterComponent,
            ToolComponent,
            ToolDetailsComponent,
            ToolBasicsComponent,
            ToolListComponent,
            ToolFiltersComponent,
            JavaWebStartComponent,
            CCalculatorComponent,
            QhtsDataBrowserComponent,
            ToolBasicsComponent,
            QhtsCurveFitComponent,
            QhtsPlateBrowserComponent,
            CustomContentDirective,
            ScreenshotDisplayComponent,
            QhtsSampleClientComponent,
            QhtsHeatmapBrowserComponent
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolComponent);
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
