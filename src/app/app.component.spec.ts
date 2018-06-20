import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NcatsHeaderComponent} from "./ncats-header/ncats-header.component";
import {NcatsFooterComponent} from "./ncats-footer/ncats-footer.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../assets/material/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ComponentNameService} from "./services/component-name.service";
import {LoadingService} from './services/loading.service';
import {DataLoaderService} from './services/data-loader.service';
import {UnfurlingMetaService} from './services/unfurling-meta.service';
import {ToolComponent} from "./tool/tool.component";
import {ToolListComponent} from "./tool-list/tool-list.component";
import {ToolDetailsComponent} from "./tool-details/tool-details.component";
import {JavaWebStartComponent} from "./pages/java-web-start/java-web-start.component";
import {CCalculatorComponent} from "./pages/c-calculator/c-calculator.component";
import {QhtsDataBrowserComponent} from "./pages/qhts-data-browser/qhts-data-browser.component";
import {ToolBasicsComponent} from "./tool-basics/tool-basics.component";
import {QhtsCurveFitComponent} from "./pages/qhts-curve-fit/qhts-curve-fit.component";
import {QhtsPlateBrowserComponent} from "./pages/qhts-plate-browser/qhts-plate-browser.component";
import {CustomContentDirective} from "./tool-details/custom-content.directive";
import {ScreenshotDisplayComponent} from "./screenshot-display/screenshot-display.component";
import {QhtsSampleClientComponent} from "./pages/qhts-sample-client/qhts-sample-client.component";
import {QhtsHeatmapBrowserComponent} from "./pages/qhts-heatmap-browser/qhts-heatmap-browser.component";
import { APP_BASE_HREF } from '@angular/common';


describe('AppComponent', () => {
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
            AppComponent,
            NcatsHeaderComponent,
            NcatsFooterComponent,
            ToolComponent,
            ToolListComponent,
            ToolDetailsComponent,
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
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('NCATS Toolbox');
  }));
});
