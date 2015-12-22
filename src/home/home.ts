import {Component, View, CORE_DIRECTIVES,NgFor} from 'angular2/angular2';
import {Location, RouteConfig, RouterLink, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import {Game1} from './game1/game1';
import {Game2} from './game2/game2';
import {Game3} from './game3/game3';

import {PipeWithDirective} from './pipeWithDirective';
import {Const} from '../utils/const';
import {SecretsDirective} from './homeSecrets/secrets';
import {json} from "../utils/fetch";

import {NgbAccordion, NgbAccordionGroup} from './acord';

let styles = require('./home.css');
let template = require('./home.html');


@Component({
  selector: 'home'
})
@View({
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, RouterLink, PipeWithDirective,SecretsDirective,NgbAccordion, NgbAccordionGroup, NgFor],
  template: template,
  styles: [styles]
})
@RouteConfig([
  { path: '/',       redirectTo: '#/home/game2' },
  { path: '/game1',   as: 'Game1',   component: Game1 },
  { path: '/game2', as: 'Game2', component: Game2},
  { path: '/game3', as: 'LastGame', component: Game3}])
export class Home {
  jwt:string;
  decodedJwt:string;
  isOpen:boolean = false;
  innp: any = "";

  constructor(public router:Router) {
    this.jwt = localStorage.getItem('jwt');
    this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
  }
  groups:Array<any> = [
    {
      heading: 'Dynamic 1',
      content: 'I am dynamic!'
    },
    {
      heading: '57867678969',
      content: '46464654'
    },
    {
      heading: 'rahgl gulu',
      content: 'Dynamic as well'
    }
  ];
  logout() {
    localStorage.removeItem('jwt');
    this.router.parent.navigateByUrl('/login');
  }
}



