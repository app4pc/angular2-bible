import { Component, AfterViewInit, DynamicComponentLoader,} from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from '../common/headers';

declare var zingchart:any;

let template = require('./dashboard.html');
let style = require('./dashboard.css');

@Component({
  selector: 'dashboard',
  directives: [ RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  style: style,
  template: template
})

export class Dashboard implements AfterViewInit {
  isLogedIn:Boolean=localStorage.getItem('jwt');
  hdr:Headers=new Headers();
  response:any;
  constructor(public router: Router, public http: Http) {
    this.http = http;
    this.hdr.append('clientname', localStorage.getItem('clientname'));
    this.hdr.append('X-Auth-Token', localStorage.getItem('X-Auth-Token'));
    this.hdr.append('algo_access', localStorage.getItem('algo_access'));
    this.hdr.append('user_type', localStorage.getItem('user_type'));
    this.hdr.append('email', localStorage.getItem('email'));
    this.hdr.append('username', localStorage.getItem('username'));
    this.hdr.append('name', localStorage.getItem('name'));
    if(!this.isLogedIn){
      this.router?this.router.parent.navigateByUrl('/login'):window.location.pathname='/login';
    }
    this.firstCll();
    var idleHandler=setInterval(function () {
      var idlT=parseInt(window.localStorage.getItem('idleTime'));
      var logdInAtt=parseInt(window.localStorage.getItem('loggedInAt'));
      var crntTime= (new Date()).getTime();
      if(idlT>300 || crntTime-logdInAtt > 1000*60*60*24){
        window.localStorage.removeItem('jwt');
        console.log("idle for more then three minute");
        this.router?this.router.parent.navigateByUrl('/login'):window.location.pathname='/login';
      }else {
        window.localStorage.setItem('idleTime',""+(idlT+5))
      }
    },5000);
  }
  ngAfterViewInit() {
    if(!jQuery(".fa-sign-out").css("display")){
      window.location.reload();
    }
    jQuery("#drawer-toggle-label,header.hdd-zin").css("visibility","visible");
    jQuery(".lodngScr").removeClass("loaded");
  }
  firstCll() {
    console.log("firstCll");
  }
}
