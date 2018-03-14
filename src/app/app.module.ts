import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../assets/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NcatsHeaderComponent} from './ncats-header/ncats-header.component';
import {NcatsFooterComponent} from './ncats-footer/ncats-footer.component';
import {LoadingService} from './services/loading.service';
import { ToolComponent } from './tool/tool.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import {DataLoaderService} from './services/data-loader.service';
import {GoogleApiService} from './services/google-api.service';
import { ToolDetailsComponent } from './tool-details/tool-details.component';
import {AppRoutingModule} from './app-routing.module';
import {CCalculatorComponent} from './c-calculator/c-calculator.component';
import { QhtsDataBrowserComponent } from './qhts-data-browser/qhts-data-browser.component';
import { ToolBasicsComponent } from './tool-basics/tool-basics.component';
import {UnfurlingMetaService} from './services/unfurling-meta.service';
import { QhtsCurveFitComponent } from './qhts-curve-fit/qhts-curve-fit.component';
import {JavaWebStartComponent} from './java-web-start/java-web-start.component';
import {QhtsPlateBrowserComponent} from "./qhts-plate-browser/qhts-plate-browser.component";
import { CustomContentDirective } from './tool-details/custom-content.directive';
import {ComponentNameService} from "./services/component-name.service";
import { ScreenshotDisplayComponent } from './screenshot-display/screenshot-display.component';

@NgModule({
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
      ComponentNameService,
    LoadingService,
      DataLoaderService,
      GoogleApiService,
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
        ScreenshotDisplayComponent

    ],
    entryComponents: [
        CCalculatorComponent,
        QhtsDataBrowserComponent,
        QhtsCurveFitComponent,
        QhtsPlateBrowserComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
