import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject, of, BehaviorSubject} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {Tool} from '../models/tool';

const URL = environment.TOOL_URL;
const ENVIRONMENT = environment;
@Injectable()
export class DataLoaderService {

    private _dataSource = new BehaviorSubject<any>([]);
    //  Observable navItem stream
    data$ = this._dataSource.asObservable();
    data: Tool[] = [];
    dataMap: Map<string, Tool[]> = new Map();
    filterMap: Map<string, string[]> = new Map<string, string[]>();
    filteredDataMap: Map<string, Tool[]> = new Map();


    constructor(private http: HttpClient) {
        this._getData();
    }

    private _loadData(): Observable<any> {
        return this.http.get(URL, {responseType: 'text'})
            .pipe(
                map(response => {
                    this.data = [];
                    this.csvJSON(response.trim());
                    this._dataSource.next(this.dataMap);
                    return this.dataMap;
                }),
                catchError(this.handleError('getData', []))
            );
    }

    _getData(): void {
        if (this.dataMap.size > 0) {
            this._dataSource.next(this.dataMap);
        } else {
            this._loadData().subscribe();
        }
    }

    getData():Observable<Tool[]> {
        return this._dataSource.getValue();
    }

    getCount(): number {
        return this.data.length;
    }

    filterData(filters): void {
        console.log(this.filterMap);
        this.filterMap.set(filters.property, filters.filters);
        console.log(this.filterMap);
        let filteredList: Tool[] = [];
        this.filterMap.forEach((filters, property) => {
            let listToFilter: Tool[];
            if(filteredList.length > 0){
                listToFilter = filteredList;
                filteredList = [];
            } else {
                listToFilter = this.data;
            }
          if(filters.length > 0) {
              let ret: Tool[] = [];
              filters.forEach(filter => {
                  listToFilter.map(tool => {
                      if(tool[property].includes(filter)){
                          filteredList.push(tool);
                      }
                  })
                 // ret = Array.from(new Set(ret.concat(ret.filter(tool => tool[property].includes(filter)))));
              })
              filteredList = Array.from(new Set(filteredList));
              console.log(filteredList);
          } else {
                this.filterMap.delete(property);
          }
        })
        if(filteredList.length === 0){
            filteredList = this.data;
        }
        console.log(filteredList);
        this._dataSource.next(this._mapTools(filteredList));
    }

    getByName(name: string): Observable<Tool> {
        if (this.data.length > 0) {
            return of(this.data.filter(tool => tool.toolUrl.toLowerCase() === name.toLowerCase())[0]);
        } else {
            return this.http.get(URL, {responseType: 'text'})
                .pipe(
                    map(response => {
                        this.data = [];
                        this.csvJSON(response.trim());
                        return this.data.filter(tool => tool.toolUrl.toLowerCase() === name.toLowerCase())[0];
                    }));
        }
    }

    getFields(property: string): string[] {
        const temp: any[] = [];
        this.data.map(tool => temp.push(tool[property]));
        return Array.from(new Set([].concat(...temp)));
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private csvJSON(csv): void {
        console.log("parsing");
        const lines: string[] = csv.split(/\r\n|\n/);

        const headers = lines.shift().split(',');
        if (lines.length > 0) {
        for (const i of lines) {
            const currentline = i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            const data: {} = {};
                for (const j of Object.keys(headers)) {
                    // todo : switch to global replace
                    data[headers[j]] = currentline[j].replace('"',  '').replace('"',  '');
            }
            const tool: Tool = new Tool(data);
            if (!tool.obsolete) {
                this.data.push(tool);
            }
        }
        }
        this.dataMap = this._mapTools(this.data);
    }

    private _mapTools(data: Tool[]): Map<string, Tool[]> {
        const map: Map<string, Tool[]> = new Map();
        data.forEach(tool => {
            let parentList: Tool[] = map.get(tool.parentProject);
            if (parentList && parentList.length > 0) {
                parentList.push(tool);
            } else {
                parentList = [tool];
            }
            map.set(tool.parentProject, parentList);
        });
        return map;
    }
}

