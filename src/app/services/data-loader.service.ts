import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {Tool} from '../models/tool';

const URL = 'assets/tool-list.csv';
//const URL = 'https://sheets.googleapis.com/v4/spreadsheets/1SLbypy2WC8vld-_NPiFJiLSBBMsQlic22gNmRv5EYv8?key=AIzaSyDxUuWWyIKNZIQ0bP2GJchBdARPsxcNA04';
@Injectable()
export class DataLoaderService {

    private _dataSource = new Subject<any>();
    //  Observable navItem stream
    data$ = this._dataSource.asObservable();
    data: Tool[] =[];

    constructor(private http: HttpClient) {}

    getData(): Observable<any> {
        return this.http.get(URL, {responseType: 'text'})
            .pipe(
                map(response => {
                    this.csvJSON(response.trim());
                    return this.data;
                }),
                catchError(this.handleError('getData', []))
            );
/*        if (this.data) {
            return Observable.of(this.data)
        } else {
            return this.http.get(URL, {responseType: 'text'})
                .pipe(
                    map(response => {
                        this.data = [];
                        this.csvJSON(response.trim());
                        return this.data;
                    }),
                    catchError(this.handleError('getData', []))
                );
        }*/
    }

    getByName(name: string): Observable<Tool> {
        console.log(name);
        if (this.data) {
            console.log(this.data);
          console.log(this.data.filter(tool => tool.toolName.toLowerCase() === name));
            return Observable.of(this.data.filter(tool => tool.toolName.toLowerCase() === name)[0])
        } else {
            return this.http.get(URL, {responseType: 'text'})
                .pipe(
                    map(response => {
                        console.log(response);
                        this.data = [];
                        this.csvJSON(response.trim());
                        console.log(this.data.filter(tool => tool.toolName.toLowerCase() === name));
                        return this.data.filter(tool => tool.toolName.toLowerCase() === name)[0]
                    }))
        }
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
        const result: any[] = [];

        const headers = lines.shift().split(',');
        for (const i of lines) {
            const currentline = i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            let data: {} = {};
            for (const j in headers) {
                // todo : switch to global replace
                data[headers[j]] = currentline[j].replace('"','').replace('"','');
            }
            const tool: Tool = new Tool(data);
         this.data.push(tool);
        }
        console.log('done');
        this._dataSource.next(this.data);
    }
}

