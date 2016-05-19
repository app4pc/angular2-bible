import { Component, AfterViewInit, DynamicComponentLoader,} from '@angular/core';
import { Router} from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
declare var decreptIt:any;
let template = require('./dashboard.html');

@Component({
  selector: 'dashboard',
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: template
})

export class Dashboard implements AfterViewInit {
  isLogedIn:Boolean=localStorage.getItem('jwt');
  hdr:Headers=new Headers();
  userRole:any;
  response:any;
  constructor(public router: Router, public http: Http) {
    if(!this.isLogedIn){
      this.router?this.router.navigateByUrl('/login'):window.location.pathname='/login';
    }else {
      this.http = http;
      this.hdr.append('clientname', decreptIt(localStorage.getItem('clientname')));
      this.hdr.append('X-Auth-Token', localStorage.getItem('X-Auth-Token'));
      this.hdr.append('algo_access', decreptIt(localStorage.getItem('algo_access')));
      this.hdr.append('user_type', decreptIt(localStorage.getItem('user_type')));
      this.hdr.append('email', decreptIt(localStorage.getItem('email')));
      this.hdr.append('username', decreptIt(localStorage.getItem('username')));
      this.hdr.append('name', decreptIt(localStorage.getItem('name')));
      jQuery(".lodngScr").removeClass("loaded");
      this.firstCll();
    }

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
