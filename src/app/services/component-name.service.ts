import {Injectable, Type} from '@angular/core';
import {CCalculatorComponent} from '../c-calculator/c-calculator.component';
import {QhtsPlateBrowserComponent} from '../qhts-plate-browser/qhts-plate-browser.component';
import {QhtsCurveFitComponent} from '../qhts-curve-fit/qhts-curve-fit.component';
import {QhtsDataBrowserComponent} from '../qhts-data-browser/qhts-data-browser.component';
import {QhtsSampleClientComponent} from '../qhts-sample-client/qhts-sample-client.component';
import {QhtsHeatmapBrowserComponent} from '../qhts-heatmap-browser/qhts-heatmap-browser.component';
import {ResolverComponent} from '../resolver/resolver.component';

@Injectable()
export class ComponentNameService {
    COMPONENTS: Map<string, Type<any>> = new Map<string, Type<any>>();
  constructor() {
      this.COMPONENTS.set('CCalculatorComponent', CCalculatorComponent);
      this.COMPONENTS.set('QhtsDataBrowserComponent', QhtsDataBrowserComponent);
      this.COMPONENTS.set('QhtsCurveFitComponent', QhtsCurveFitComponent);
      this.COMPONENTS.set('QhtsPlateBrowserComponent', QhtsPlateBrowserComponent);
      this.COMPONENTS.set('QhtsSampleClientComponent', QhtsSampleClientComponent);
      this.COMPONENTS.set('QhtsHeatmapBrowserComponent', QhtsHeatmapBrowserComponent);
      this.COMPONENTS.set('ResolverComponent', ResolverComponent);
  }

  getComponent(name: string): Type<any> {
    return this.COMPONENTS.get(name);
  }
}
