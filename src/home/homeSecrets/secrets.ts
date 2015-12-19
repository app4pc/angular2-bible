import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {Location, RouteConfig, RouterLink, Router} from 'angular2/router';
import {GetSecrets} from './GetSecrets';

let secrets=require('./secrets.html');

@Component({
    selector: 'secrets-directive'
})
@View({
    directives: [CORE_DIRECTIVES],
    template : secrets
})

export class SecretsDirective extends GetSecrets{

}