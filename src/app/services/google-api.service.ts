import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
/*import {HttpClient} from "@angular/common/http";
import {utf8Encode} from "@angular/compiler/src/util";
//import {google, GoogleApis} from "googleapis";
//const {google} = require('googleapis');

const TOKEN = environment.token;
//const HEADER = window.btoa('{"alg":"RS256","typ":"JWT"}');
const HEADER = {"alg":"RS256","typ":"JWT"};
const JWT: JWT = {
    iss: TOKEN.client_email,
    scope: "https://www.googleapis.com/auth/devstorage.readonly",
    aud: "https://www.googleapis.com/oauth2/v4/token",
    exp: (Date.now() + 3600000),
    iat: Date.now()
};*/


@Injectable()
export class GoogleApiService {
/*    key: any;
  constructor(private http: HttpClient) {
    //  console.log(google);
      const header = window.btoa(JSON.stringify(HEADER));
      const claimset = window.btoa(JSON.stringify(JWT));
    const signature = header + '.' + claimset;
    console.log(signature);
      const buf = new ArrayBuffer(signature.length);
      console.log(window);
      //arr.from(signature);
   //  const arr: any = Uint8Array.of(signature);
 //   console.log(.from(signature));
     var uint8array = new window['TextEncoder']("utf-8").encode(signature);
   //   var string = new TextDecoder().decode(uint8array);
      console.log(uint8array );
    /!*  window.crypto.subtle.importKey("pkcs8", new window['TextEncoder']("utf-8").encode(TOKEN.private_key),{
          name: "RSASSA-PKCS1-v1_5",
          hash: "SHA-256"
      },false, ['sign']).then(res => {
          console.log(res);
          this.key =res;
          this.sign(uint8array);
      });*!/
     // this.sign(uint8array);
    //  const arr = new Uint8Array(signature);*/
  }
/*
  sign(arr) {


     console.log(this.key);
     const signed =  window.crypto.subtle.sign(
          {
              name: "RSASSA-PKCS1-v1_5",
              hash: "SHA-256"
          },
          this.key, //from generateKey or importKey above
          arr //ArrayBuffer of data you want to sign
      )
          .then(function(signature){
              //returns an ArrayBuffer containing the signature
              console.log(new Uint8Array(signature));
          })
  }*/

/*
  googleAuth(){
      // This method looks for the GCLOUD_PROJECT and GOOGLE_APPLICATION_CREDENTIALS
// environment variables.
      google.auth.getApplicationDefault(function (err, authClient, projectId) {
          if (err) {
              throw err;
          }

          // The createScopedRequired method returns true when running on GAE or a local developer
          // machine. In that case, the desired scopes must be passed in manually. When the code is
          // running in GCE or a Managed VM, the scopes are pulled from the GCE metadata server.
          // See https://cloud.google.com/compute/docs/authentication for more information.
          if (authClient.createScopedRequired && authClient.createScopedRequired()) {
              // Scopes can be specified either as an array or as a single, space-delimited string.
              authClient = authClient.createScoped([
                  'https://www.googleapis.com/auth/compute'
              ]);
          }

          // Fetch the list of GCE zones within a project.
          // NOTE: You must fill in your valid project ID before running this sample!
          var compute = google.compute({
              version: 'v1',
              auth: authClient
          });
          var projectId = 'YOUR_PROJECT_ID';

          compute.zones.list({
              project: projectId,
              auth: authClient
          }, function (err, result) {
              console.log(err, result);
          });
      });
  }
*/


//}

export interface JWT {
  iss: string;
  scope: string;
  aud: string;
  exp: number;
  iat: number;
}