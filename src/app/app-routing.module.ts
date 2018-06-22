import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToolDetailsComponent} from './tool-details/tool-details.component';
import {ToolListComponent} from './tool-list/tool-list.component';
import {ToolResolver} from './services/tool.resolver';

const ROUTES: Routes = [
  {
    path: '',
    component: ToolListComponent,
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
      ToolResolver
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
