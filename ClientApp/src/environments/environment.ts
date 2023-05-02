// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  instance: 'https://login.microsoftonline.com/',
  tenant: 'df56b91e-adce-4ef8-a350-c5a84c4ecf75',
  clientId: '8068d0e1-e9c9-4abe-a630-4b2505a3ca73',
  extraQueryParameter: 'nux=1',
  endpoints: {
    "http://localhost:4200": "8068d0e1-e9c9-4abe-a630-4b2505a3ca73"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
