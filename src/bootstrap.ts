import {enableProdMode, provide} from "@angular/core";
import { FORM_PROVIDERS ,APP_BASE_HREF} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {Http,HTTP_PROVIDERS} from '@angular/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt';

const ENV_PROVIDERS = [];

enableProdMode();
/*
 * App Component
 * our top level component that holds all of our components
 */
import {App} from './static/client/app/app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
document.addEventListener('DOMContentLoaded', function main() {
  return bootstrap(<any>App, [
    // These are dependencies of our App
      ...FORM_PROVIDERS,
      ...HTTP_PROVIDERS,
      ...ROUTER_PROVIDERS,
      ...ENV_PROVIDERS,
    provide(AuthHttp, {
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig({
          tokenName: 'jwt'
        }), http);
      },
      deps: [Http]
    }),
      provide(APP_BASE_HREF, {useValue : '/' })
  ])
  .catch(err => console.error(err));
});
