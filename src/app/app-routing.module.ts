import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToolDetailsComponent} from './tool-details/tool-details.component';
import {ToolListComponent} from './tool-list/tool-list.component';
import {ToolListResolver} from './services/tool-list.resolver';
import {ToolResolver} from './services/tool.resolver';
import {CCalculatorComponent} from "./c-calculator/c-calculator.component";
import {ToolNameResolver} from "./services/tool-name.resolver";
import {QhtsDataBrowserComponent} from "./qhts-data-browser/qhts-data-browser.component";

const ROUTES: Routes = [
  {
    path: '',
    component: ToolListComponent,
    resolve: {
      tools: ToolListResolver
    }
  },
    {
        path: 'c911 calculator',
        component: CCalculatorComponent,
        resolve: {
            tool: ToolNameResolver
        }
    },
  {
        path: 'qhts data browser',
        component: QhtsDataBrowserComponent,
        resolve: {
            tool: ToolNameResolver
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
