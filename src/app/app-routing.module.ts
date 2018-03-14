import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToolDetailsComponent} from './tool-details/tool-details.component';
import {ToolListComponent} from './tool-list/tool-list.component';
import {ToolListResolver} from './services/tool-list.resolver';
import {ToolResolver} from './services/tool.resolver';
import {CCalculatorComponent} from "./c-calculator/c-calculator.component";
import {ToolNameResolver} from "./services/tool-name.resolver";
import {QhtsDataBrowserComponent} from "./qhts-data-browser/qhts-data-browser.component";
import {QhtsCurveFitComponent} from "./qhts-curve-fit/qhts-curve-fit.component";
import {QhtsPlateBrowserComponent} from "./qhts-plate-browser/qhts-plate-browser.component";
import {ToolBasicsComponent} from "./tool-basics/tool-basics.component";
import {ComponentNameResolver} from "./services/component-name.resolver";

const ROUTES: Routes = [
  {
    path: '',
    component: ToolListComponent,
    resolve: {
      tools: ToolListResolver
    }
  },
    {
    path: ':tool',
    component: ToolDetailsComponent,
      resolve: {
          tool: ToolResolver
      }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ToolListResolver,
      ToolNameResolver,
      ToolResolver
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
