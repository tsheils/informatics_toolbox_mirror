import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {from, Observable, of, Subject} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import { Option } from '../option';

// const URL = 'https://tripod.nih.gov/servlet/resolverBeta3/';
 const URL = 'https://tripod.nih.gov/servlet/resolverBeta4/';
const ENVIRONMENT = environment;
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
       return this.http.get<any>(URL + '_options').pipe(
            map(res => {
            // if (ENVIRONMENT.public === true) {
            //     const ret = res.filter(field => !field.tags.includes('restricted'));
            //     return ret;
            // } else {
            //     return res;
            // }

            res.map(option => {
                if ((ENVIRONMENT.public && !option.tags.includes('restricted')) || !ENVIRONMENT.public) {
                    return new Option().fromJSON(option);
                }
            });

            return res;
        })
        );
    }

    resolveData(parameters: string[], names: string[]): Observable<any> {
      const url = URL + parameters.join('/');
      const data: any = {
          structure: names.map(name => name = this.parseSmiles(name)),
          format: 'json'
      };
        if (ENVIRONMENT.public === false) {
            data.apiKey = '5fd5bb2a05eb6195';
            return this.http.post<any>(url, 'structure=' + names.join('%0A') + '&format=json&apikey=5fd5bb2a05eb6195', httpOptions);
        } else {
            return this.http.post<any>(url, 'structure=' + names.join('%0A') + '&format=json', httpOptions);
        }
    }


    private parseSmiles(smiles: string): string {
        const parsed = smiles
            .replace(/[;]/g, '%3B')
            .replace(/[#]/g, '%23')
            .replace(/[+]/g, '%2B')
            .replace(/[\\]/g, '%5C')
            .replace(/[|]/g, '%7C');
        return parsed;
    }
}
