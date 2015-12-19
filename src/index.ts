import { bootstrap, FORM_PROVIDERS, provide } from 'angular2/angular2';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy,  } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import { App } from './app/app';

bootstrap(
  App,
  [
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass : HashLocationStrategy})
  ]
);
