/**
 * Created by crm3 on 12/18/2015.
 */
import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {Location, RouteConfig, RouterLink, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Home} from '../home';
import {Const} from '../../utils/const';
import {status, text} from '../../utils/fetch';

let secrets=require('./secrets.html');

@Component({
    selector: 'secrets-directive'
})
@View({
    directives: [CORE_DIRECTIVES,  ROUTER_DIRECTIVES,RouterLink],
    template : secrets
})

export class GetSecrets {
    jwt:string;
    decodedJwt:string;
    response:string;
    api:string;

    constructor(public router:Router) {
        this.jwt = localStorage.getItem('jwt');
        this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
    }

    logout() {
        localStorage.removeItem('jwt');
        this.router.parent.navigateByUrl('/login');
    }

    callAnonymousApi() {
        this._callApi('Anonymous', Const().apiUrl+'/random-quote');
    }

    callSecuredApi() {
        this._callApi('Secured', Const().apiUrl+'/protected/random-quote');
    }

    _callApi(type, url) {
        this.response = null;
        this.api = type;
        window.fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + this.jwt
                }
            })
            .then(status)
            .then(text)
            .then((response) => {
                this.response = response;
            })
            .catch((error) => {
                this.response = error.message;
            });
    }
}