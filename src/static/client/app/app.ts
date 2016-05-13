import {Component} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';

import {LoggedInRouterOutlet} from './LoggedInOutlet';
import {Login} from '../login/login';
import {Dashboard} from '../dashboard/dashboard';

let template = require('./app.html');

@Component({
  selector: 'auth-app',
  template: template,
  directives: [ LoggedInRouterOutlet ]
})

@RouteConfig([
  { path: '/', redirectTo: ['/Dashboard'] },
  { path: '/login', component: Login, as: 'Login' },
  { path: '/dashboard', component: Dashboard, as: 'Dashboard' }
])

export class App {
  lstItem:Array<any>;
  isLogedIn:Boolean=localStorage.getItem('jwt');
  constructor(public router: Router) {
    this.lstItem=[["App4pc","fa-home","dashboard"],
      ["Menu 1","fa-circle-o","dashboard"],
      ["Menu 2","fa-music","dashboard"],
      ["Menu 3","fa-phone","dashboard"],
      ["Menu 4","fa-music","dashboard"],
      ["Settings","fa-gear fa-spin","dashboard"],
      ["App4pc Toutorial","fa-phone","dashboard"]
    ];
    if(!this.isLogedIn && window.location.pathname != '/login'){
      localStorage.removeItem('jwt');
      window.location.pathname = '/login';
    }else if(window.location.pathname != '/login'){
      this.isLogedIn = localStorage.getItem('jwt');
    }
  }
  logout() {
    this.isLogedIn=false;
    localStorage.removeItem('jwt');
    window.location.pathname = '/login';
  }
}
