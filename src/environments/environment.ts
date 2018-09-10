// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDR1Go2ApTnVPba5pqEnGTYC_OlF5cY3qM',
    authDomain: 'ingreso-egreso-app-467fc.firebaseapp.com',
    databaseURL: 'https://ingreso-egreso-app-467fc.firebaseio.com',
    projectId: 'ingreso-egreso-app-467fc',
    storageBucket: 'ingreso-egreso-app-467fc.appspot.com',
    messagingSenderId: '931107455261'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
