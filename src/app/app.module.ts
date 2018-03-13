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
import {CCalculatorComponent} from "./c-calculator/c-calculator.component";
import { QhtsDataBrowserComponent } from './qhts-data-browser/qhts-data-browser.component';
import { ToolBasicsComponent } from './tool-basics/tool-basics.component';
import {UnfurlingMetaService} from './services/unfurling-meta.service';

@NgModule({
  declarations: [
    AppComponent,
    NcatsHeaderComponent,
    NcatsFooterComponent,
    ToolComponent,
    ToolListComponent,
      ToolDetailsComponent,
    CCalculatorComponent,
    QhtsDataBrowserComponent,
    ToolBasicsComponent
  ],
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
    LoadingService,
      DataLoaderService,
      GoogleApiService,
      UnfurlingMetaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
