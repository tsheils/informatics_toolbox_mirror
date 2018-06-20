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
import { ToolDetailsComponent } from './tool-details/tool-details.component';
import {AppRoutingModule} from './app-routing.module';
import {CCalculatorComponent} from './pages/c-calculator/c-calculator.component';
import { QhtsDataBrowserComponent } from './pages/qhts-data-browser/qhts-data-browser.component';
import { ToolBasicsComponent } from './tool-basics/tool-basics.component';
import {UnfurlingMetaService} from './services/unfurling-meta.service';
import { QhtsCurveFitComponent } from './pages/qhts-curve-fit/qhts-curve-fit.component';
import {JavaWebStartComponent} from './pages/java-web-start/java-web-start.component';
import {QhtsPlateBrowserComponent} from './pages/qhts-plate-browser/qhts-plate-browser.component';
import { CustomContentDirective } from './tool-details/custom-content.directive';
import {ComponentNameService} from './services/component-name.service';
import { ScreenshotDisplayComponent } from './screenshot-display/screenshot-display.component';
import { QhtsSampleClientComponent } from './pages/qhts-sample-client/qhts-sample-client.component';
import { QhtsHeatmapBrowserComponent } from './pages/qhts-heatmap-browser/qhts-heatmap-browser.component';
import { ResolverComponent } from './pages/resolver/resolver.component';
import {ResolverService} from "./pages/resolver/services/resolver.service";
import { ToolFiltersComponent } from './tool-filters/tool-filters.component';

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
      UnfurlingMetaService,
      ResolverService
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
        QhtsHeatmapBrowserComponent,
        ResolverComponent,
        ToolFiltersComponent

    ],
    entryComponents: [
        CCalculatorComponent,
        QhtsDataBrowserComponent,
        QhtsCurveFitComponent,
        QhtsPlateBrowserComponent,
        QhtsSampleClientComponent,
        QhtsHeatmapBrowserComponent,
        ResolverComponent

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
