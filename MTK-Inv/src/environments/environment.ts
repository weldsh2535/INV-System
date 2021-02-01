// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import * as firebase from "firebase";

export const environment = {
  production: false,
  // apiURL:'http://localhost:51978/api',
  firebase: {
    apiKey: "AIzaSyDKwzKNcOB3zCeM_G7LMUkWSVfQYV3WUfY",
    authDomain: "mtk-inv-28729.firebaseapp.com",
    projectId: "mtk-inv-28729",
    storageBucket: "mtk-inv-28729.appspot.com",
    messagingSenderId: "997455992970",
    appId: "1:997455992970:web:d620b391aacfbdb5037573",
    measurementId: "G-649BX7CDX7"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
