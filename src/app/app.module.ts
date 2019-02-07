import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../assets/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
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
import {JavaWebStartComponent} from './templates/java-web-start/java-web-start.component';
import {QhtsPlateBrowserComponent} from './pages/qhts-plate-browser/qhts-plate-browser.component';
import { CustomContentDirective } from './tool-details/custom-content.directive';
import {ComponentNameService} from './services/component-name.service';
import { ScreenshotDisplayComponent } from './templates/screenshot-display/screenshot-display.component';
import { QhtsSampleClientComponent } from './pages/qhts-sample-client/qhts-sample-client.component';
import { QhtsHeatmapBrowserComponent } from './pages/qhts-heatmap-browser/qhts-heatmap-browser.component';
import { ResolverComponent } from './pages/resolver/resolver.component';
import {ResolverService} from './pages/resolver/services/resolver.service';
import { ToolFiltersComponent } from './tool-filters/tool-filters.component';
import { ScaffoldHopperComponent } from './pages/scaffold-hopper/scaffold-hopper.component';
import { IqcConvertComponent } from './pages/iqc-convert/iqc-convert.component';
import {NcatsFindExcelComponent} from "./pages/ncatsfind-excel/ncatsfind-excel.component";
import { MarkdownViewerComponent } from './templates/markdown-viewer/markdown-viewer.component';
import {MarkdownModule} from "ngx-markdown";
import { ChemkitComponent } from './pages/chemkit/chemkit.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
      AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
      MarkdownModule.forRoot({ loader: HttpClient })
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
        ToolFiltersComponent,
        ScaffoldHopperComponent,
        IqcConvertComponent,
        NcatsFindExcelComponent,
        MarkdownViewerComponent,
        ChemkitComponent
    ],
    entryComponents: [
        CCalculatorComponent,
        QhtsDataBrowserComponent,
        QhtsCurveFitComponent,
        QhtsPlateBrowserComponent,
        QhtsSampleClientComponent,
        QhtsHeatmapBrowserComponent,
        ResolverComponent,
        ScaffoldHopperComponent,
        IqcConvertComponent,
        NcatsFindExcelComponent,
        ChemkitComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
