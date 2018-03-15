import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {DataLoaderService} from './data-loader.service';
import {Tool} from '../models/tool';

@Injectable()
export class ToolListResolver implements Resolve<any> {
    constructor(private dataLoaderService: DataLoaderService) {  }

    resolve(route: ActivatedRouteSnapshot): Observable<Tool[]> {
        return this.dataLoaderService.getData();
    }
}
