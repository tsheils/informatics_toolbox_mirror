import {Injectable, Type} from '@angular/core';
import {CCalculatorComponent} from '../pages/c-calculator/c-calculator.component';
import {QhtsPlateBrowserComponent} from '../pages/qhts-plate-browser/qhts-plate-browser.component';
import {QhtsCurveFitComponent} from '../pages/qhts-curve-fit/qhts-curve-fit.component';
import {QhtsDataBrowserComponent} from '../pages/qhts-data-browser/qhts-data-browser.component';
import {QhtsSampleClientComponent} from '../pages/qhts-sample-client/qhts-sample-client.component';
import {QhtsHeatmapBrowserComponent} from '../pages/qhts-heatmap-browser/qhts-heatmap-browser.component';
import {ResolverComponent} from '../pages/resolver/resolver.component';
import {ScaffoldHopperComponent} from '../pages/scaffold-hopper/scaffold-hopper.component';
import {IqcConvertComponent} from "../pages/iqc-convert/iqc-convert.component";

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
      this.COMPONENTS.set('ScaffoldHopperComponent', ScaffoldHopperComponent);
      this.COMPONENTS.set('IqcConvertComponent', IqcConvertComponent);
  }

  getComponent(name: string): Type<any> {
    return this.COMPONENTS.get(name);
  }
}
