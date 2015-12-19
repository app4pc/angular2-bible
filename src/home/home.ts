import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {Location, RouteConfig, RouterLink, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import {Test} from './test1/test';
import {AnotherTest} from './test2/anotherTest';
import {LastTest} from './test3/LastTest';

import {ButttonDirective} from './moreTest';
import {Const} from '../utils/const';
import {SecretsDirective} from './homeSecrets/secrets';
import {json} from "../utils/fetch";

let styles = require('./home.css');
let template = require('./home.html');


@Component({
  selector: 'home'
})
@View({
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, RouterLink, ButttonDirective,SecretsDirective],
  template: template,
  styles: [styles]
})
@RouteConfig([
  { path: '/',       redirectTo: '#/home/Test' },
  { path: '/Test',   as: 'TestMe',   component: Test },
  { path: '/AnotherTest', as: 'AnotherTest', component: AnotherTest},
  { path: '/LastTest', as: 'LastTest', component: LastTest}])
export class Home {
  jwt:string;
  decodedJwt:string;
  constructor(public router:Router) {
    this.jwt = localStorage.getItem('jwt');
    this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
  }
  logout() {
    localStorage.removeItem('jwt');
    this.router.parent.navigateByUrl('/login');
  }
  toggleInClass(prm){
    var menu=document.querySelectorAll('.panel>.panel-heading + .collapse');
    for(let i=0;i< menu.length;i++){
      console.log("ittm "+i,menu[i]);
      (menu[i])?((menu[i].classList)?menu[i].classList.remove('in'):console.log("no menu class",menu[i])):console.log("no menu 1");
    }
    var menu1 = document.querySelector('.panel>.panel-heading:nth-of-type('+prm+') + .collapse');
    (menu1)?menu1.classList.add('in'):console.log("no menu 2: ",prm);
  }
}



