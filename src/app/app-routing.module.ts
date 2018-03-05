import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToolDetailsComponent} from './tool-details/tool-details.component';
import {ToolListComponent} from './tool-list/tool-list.component';
import {ToolListResolver} from './services/tool-list.resolver';
import {ToolResolver} from './services/tool.resolver';
import {CCalculatorComponent} from "./c-calculator/c-calculator.component";

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
           // tool: ToolResolver
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
      ToolResolver
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
