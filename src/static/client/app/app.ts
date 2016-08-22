import {Component,OnInit,AfterViewInit} from '@angular/core';
import {Router,Routes,ROUTER_DIRECTIVES} from '@angular/router';

declare var encrptIt:any;
let template = require('./app.html');

@Component({
  selector: 'auth-app',
  template: template,
  directives: [ROUTER_DIRECTIVES],
})

export class App implements AfterViewInit,OnInit{
  lstItem:Array<any>;
  isLogedIn:Boolean=localStorage.getItem('jwt');
  publicRoutes: any;
  idleHandler:any;
  constructor(public router: Router) {
    this.publicRoutes = {
      'login': true
    };
    this.lstItem=[["Login","fa-home","login"],
      ["Add User Cat","fa-circle-o","admin/addUsrCat"],
      ["All User","fa-music","admin/allUsr"],
      ["Menu 3","fa-phone","login"],
      ["Menu 4","fa-music","login"],
      ["Settings","fa-gear fa-spin","login"],
      ["App4pc Toutorial","fa-phone","login"]
    ];
  }
  ngOnInit() {
    let crUrl= window.location.pathname;
    if (!this.publicRoutes[crUrl] && !localStorage.getItem('jwt')) {
      this.logout();
    }
  }
  ngAfterViewInit() {
    this.idleHandler=setInterval(function () {
      var idlT=parseInt(localStorage.getItem('idleTime'));
      var logdInAtt=parseInt(localStorage.getItem('loggedInAt'));
      var crntTime= (new Date()).getTime();
      if(idlT>300 || crntTime-logdInAtt > 1000*60*60*24){
        this.logout();
      }else {
        localStorage.setItem('idleTime',""+(idlT+5))
      }
    },5000);
    this.router.navigate(['dashboard']);
  }
  logout() {
    clearInterval(this.idleHandler);
    this.isLogedIn=false;
    localStorage.clear();
    window.location.pathname = '/login';
  }
}
