import { Injectable } from '@angular/core';
import {DataLoaderService} from './data-loader.service';
import {Subject} from 'rxjs';

@Injectable()
export class DataSearchService {
    private _dataSource = new Subject<any>();
    data$ = this._dataSource.asObservable();

    constructor(private dataLoaderService: DataLoaderService) {
        // initial passing of data
        this.dataLoaderService.data$.subscribe(res => {
         /*   this.masterDataMap = res;
            this.years.forEach(year => {
                this.returnedDataMap.set(year, this.masterDataMap.get(year));
            });
            this._dataSource.next({data: this.returnedDataMap});*/
        });
    }

}
