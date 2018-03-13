import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {DataLoaderService} from './data-loader.service';
import {Tool} from "../models/tool";

@Injectable()
export class ToolNameResolver implements Resolve<any> {
    constructor(private dataLoaderService: DataLoaderService) {  }

    resolve(route: ActivatedRouteSnapshot): Observable<Tool> {
        console.log(route.routeConfig.path);
        return this.dataLoaderService.getByName(route.routeConfig.path);
    }
}
