import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {utf8Encode} from "@angular/compiler/src/util";

const TOKEN = environment.token;
//const HEADER = window.btoa('{"alg":"RS256","typ":"JWT"}');
const HEADER = {"alg":"RS256","typ":"JWT"};
const JWT: JWT = {
    iss: TOKEN.client_email,
    scope: "https://www.googleapis.com/auth/devstorage.readonly",
    aud: "https://www.googleapis.com/oauth2/v4/token",
    exp: (Date.now() + 3600000),
    iat: Date.now()
};

@Injectable()
export class GoogleApiService {

  constructor(private http: HttpClient) {
     const header = window.btoa(JSON.stringify(HEADER));
      const claimset = window.btoa(JSON.stringify(JWT));
    const signature = header + '.' + claimset;
    console.log(signature);
      const buf = new ArrayBuffer(signature.length);
 //   console.log(new Uint8Array(buf).);
      var uint8array = new TextEncoder("utf-8").encode("Plain Text");
      var string = new TextDecoder().decode(uint8array);
      console.log(uint8array ,string );
    //  const arr = new Uint8Array(signature);
  }


}

export interface JWT {
  iss: string;
  scope: string;
  aud: string;
  exp: number;
  iat: number;
}