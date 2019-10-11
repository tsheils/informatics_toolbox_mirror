import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, of, Subject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { Option } from '../option';

// const URL = 'https://tripod.nih.gov/servlet/resolverBeta3/';
// const URL = 'https://tripod.nih.gov/servlet/resolverBeta4/';
const URL = 'https://tripod.nih.gov/servlet/resolverBetaMitch4/';
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

                res = res.map(option => {
                    if ((ENVIRONMENT.public && !option.tags.includes('restricted')) || !ENVIRONMENT.public) {
                        return new Option(option);
                    }
                });
                return res;
            })
        );
    }

    resolveData(
        parameters: string[],
        names: Array<string>,
        standardization?: 'FRAGMENT' | 'CHARGE_NORMALIZE' | 'IDENTITY',
        useApproxMatch: boolean = true,
        useContains: boolean = false): Observable<any> {
        const url = URL + parameters.join('/') + '/approx';
        const data: any = {
            structure: names.join('\n'),
            format: 'json'
        };
        if (ENVIRONMENT.public === false) {
            data.apikey = '5fd5bb2a05eb6195';
        }
        if (standardization != null) {
            data.standardize = standardization;
        }
        data.useApproxMatch = useApproxMatch;
        data.useContains = useContains;
        return this.http.post<any>(url, this.toUrlEncodedParams(data), httpOptions).pipe(
            map(response => {
                const emptyItems = [];
                const results = response.map(item => {
                    if (item.response) {
                        const responseParts = item.response.split('\t');
                        const recommendations = responseParts.splice(-1, 1);
                        item.response = responseParts.join('\t');
                        if (item.source && item.source === 'Fuzzy Match') {
                            const emptyItem = {
                                input: item.input,
                                recommendations: recommendations[0].split('|')
                            };
                            emptyItems.push(emptyItem);
                            item.source = 'N/A';
                        }
                    } else {
                        let emptyResponse = '';
                        parameters.forEach((parameter, index, list) => {
                            emptyResponse += 'N/A';
                            if (index !== list.length) {
                                emptyResponse += '\t';
                            }
                        });
                        item.response = emptyResponse;
                        item.source = 'N/A';
                    }
                    return item;
                });
                const modifiedResponse = {
                    results: results,
                    recommendations: emptyItems
                };
                return modifiedResponse;
            })
        );
    }

    private toUrlEncodedParams(body: {[paramName: string]: any }): string {
        const encodedParams = Object.keys(body).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(body[key])}`)
            .join('&');
        return encodedParams;
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
