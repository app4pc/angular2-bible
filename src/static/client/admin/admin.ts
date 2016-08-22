import { Component, AfterViewInit} from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers} from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Router, ROUTER_DIRECTIVES ,Routes} from '@angular/router';


declare var jQuery:JQueryStatic;
declare var decreptIt:any;
let template = require('./admin.html');

@Component({
  selector: 'admin',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
  template: template
})

export class Admin implements AfterViewInit {
  isLogedIn:Boolean=localStorage.getItem('jwt');
  hdr:Headers=new Headers();
  userRole:any;
  response:any;
  constructor(public router: Router, public http: Http) {
    this.http = http;
    this.hdr.append('clientname', decreptIt(localStorage.getItem('clientname')));
    this.hdr.append('X-Auth-Token', decreptIt(localStorage.getItem('X-Auth-Token')));
    this.hdr.append('algo_access', decreptIt(localStorage.getItem('algo_access')));
    this.hdr.append('user_type', decreptIt(localStorage.getItem('user_type')));
    this.hdr.append('email', decreptIt(localStorage.getItem('email')));
    this.hdr.append('username', decreptIt(localStorage.getItem('username')));
    this.hdr.append('name', decreptIt(localStorage.getItem('name')));
    
    if(!this.isLogedIn){
      this.router?this.router.navigateByUrl('/login'):window.location.pathname='/login';
    }
    jQuery(".lodngScr").removeClass("loaded");
    this.firstCll();
  }
  ngAfterViewInit() {
    if(!jQuery(".fa-sign-out").css("display")){
      window.location.reload();
    }
    if(!this.isLogedIn){
      this.logout();
    }
  }
  firstCll() {
    console.log("firstCll");
    jQuery(".lodngScr").addClass("loaded");
  }
  logout() {
    this.isLogedIn=false;
    localStorage.clear();
    window.location.pathname = '/login';
  }
}
