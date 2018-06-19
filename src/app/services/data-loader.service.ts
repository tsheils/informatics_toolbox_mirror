import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject,  of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {Tool} from '../models/tool';

const URL = environment.TOOL_URL;
const ENVIRONMENT = environment;
@Injectable()
export class DataLoaderService {

    private _dataSource = new Subject<any>();
    //  Observable navItem stream
    data$ = this._dataSource.asObservable();
    data: Tool[] = [];
    dataMap: Map<string, Tool[]> = new Map();


    constructor(private http: HttpClient) {
        console.log(ENVIRONMENT);
    }

    getData(): Observable<any> {
        if (this.dataMap.size > 0) {
            return of(this.dataMap);
        } else {
            return this.http.get(URL, {responseType: 'text'})
                .pipe(
                    map(response => {
                        this.data = [];
                        this.csvJSON(response.trim());
                        return this.dataMap;
                    }),
                    catchError(this.handleError('getData', []))
                );
        }
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
            console.log(tool);
            console.log(environment.public);
            if (!tool.obsolete) {
                this.data.push(tool);
                let parentList: Tool[] = this.dataMap.get(tool.parentProject);
                if (parentList && parentList.length > 0) {
                    parentList.push(tool);
                } else {
                    parentList = [tool];
                }
                this.dataMap.set(tool.parentProject, parentList);
            }
            console.log(this);
        }
        }
    }
}

