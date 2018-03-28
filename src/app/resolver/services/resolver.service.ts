import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {catchError} from "rxjs/operators";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

const URL = 'https://tripod.nih.gov/servlet/resolverBeta3/';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
    })
};
@Injectable()
export class ResolverService {
    private _errorSource = new Subject<any>();
    //  Observable navItem stream
    error$ = this._errorSource.asObservable();



    constructor(private http: HttpClient) {
    }

    getOptions(): Observable<any> {
        return this.http.get<any>(URL +'_options')
    }

    resolveData(parameters: string[], names: string[]): Observable<any> {
      const url = URL + parameters.join('/');
      const data: any = {
          structure: names,
          format: 'json',
          apiKey: '5fd5bb2a05eb6195'
      };
        return this.http.post<any>(url, 'structure=' + names.join('%0A')+'&format=json&apikey=5fd5bb2a05eb6195', httpOptions)
    }
}