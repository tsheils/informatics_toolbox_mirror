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
import {DataConnectionService} from './services/data-connection.service';
import {WebSocketService} from './services/websocket.service';
import { ToolComponent } from './tool/tool.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import {DataLoaderService} from "./services/data-loader.service";


@NgModule({
  declarations: [
    AppComponent,
    NcatsHeaderComponent,
    NcatsFooterComponent,
    ToolComponent,
    ToolListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    WebSocketService,
    DataConnectionService,
    LoadingService,
      DataLoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
