import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

const URL = 'https://tripod.nih.gov/servlet/resolverBeta3/';

@Injectable()
export class ResolverService {

  constructor(private http: HttpClient) {}

  resolveData(parameters: string[], names: string): Observable<any> {
    return
  }

}
