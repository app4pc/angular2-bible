import { Component, AfterViewInit, } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from '../common/headers';
declare var jQuery:JQueryStatic;
declare var logInOpt:any;
let template = require('./login.html');
let style = require('./login.css');
@Component({
    selector: 'login',
    directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
    style: style,
    template: template
})

export class Login implements AfterViewInit{
  isLogedIn:Boolean=localStorage.getItem('jwt');
  uType:String="Select Position";
  constructor(public router: Router, public http: Http) {
    jQuery(".lodngScr").addClass("loaded");
    if(this.isLogedIn){
      this.router.parent.navigateByUrl('/dashboard');
    }
  }
  ngAfterViewInit() {
    jQuery("#drawer-toggle-label,header.hdd-zin").css("visibility","hidden");
    jQuery("#page-content").css({
      'margin-top': '0',
      'height': '100%',
      'overflow-y': 'auto'
    });
  }
  togUtyp(opt){
    this.uType=opt;
  }
  login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({'username':username,'password':password});
    this.http.post('/api/login', body)
      .subscribe(
        response => {
          let data=response.json();
          console.log("response",data);
          localStorage.setItem('X-Auth-Token',data.token);
          localStorage.setItem('username',data.username);
          localStorage.setItem('user_type',data['user_type']);
          localStorage.setItem('name', data.name);
          localStorage.setItem('email', data.email);
          localStorage.setItem('clientname', data.clientname);
          localStorage.setItem('algo_access', data.algo_access);
          localStorage.setItem('jwt', data.token);
          localStorage.setItem('loggedInAt', ""+((new Date()).getTime()));
          this.router.parent.navigateByUrl('/dashboard');
        },
        error => {
          console.log("error",error.text());
          window.alert(error.text());
        }
      );
  }
  chkMl(mail){
    let frgt=jQuery("#forgtMsg");
    let inpGrp=frgt.next().find(".input-group");
    if(!mail){
      inpGrp.addClass("errRpwd");
      return false;
    }else {
      inpGrp.removeClass("errRpwd");
    }
  }
  forgotPassword(event, mail) {
    event.preventDefault();
    let frgt=jQuery("#forgtMsg");
    let inpGrp=frgt.next().find(".input-group");
    this.chkMl(mail);
    let body = JSON.stringify({ mail });
    this.http.post('/api/forgotPassword', body, { headers: contentHeaders })
        .subscribe(
            response => {
              var resp=response.json();
              frgt.next().hide();
              frgt.html("The password link is successfully sent to <br>" +
                "<a style='color: #fff;' href='mailto:"+mail+"'>"+mail+"</a>");
            },
            error => {
              inpGrp.addClass("errRpwd");
              console.log(error);
            }
        );
  }

  reTypPwd(event,password){
    let tar=jQuery(event.target);
    event.preventDefault();
    if(tar.val() !=password){
      tar.closest(".input-group").addClass("errRpwd");
    }else {
      tar.closest(".input-group").removeClass("errRpwd");
    }
  }

  signup(event,fname, email_id, empIdSU, u_name, password, passwordSU1) {
    event.preventDefault();
    if(password != passwordSU1){
      return false;
    } else {
      let body = JSON.stringify({ fname, email_id, empIdSU, u_name, password });
      console.log("body",body);
      this.http.post('/api/user_register', body, { headers: contentHeaders })
        .subscribe(
          response => {
              let data=response.json();
              console.log("response",data);
              localStorage.setItem('X-Auth-Token',data.token);
              localStorage.setItem('username',data.username);
              localStorage.setItem('user_type',data['user_type']);
              localStorage.setItem('name', data.name);
              localStorage.setItem('email', data.email);
              localStorage.setItem('clientname', data.clientname);
              localStorage.setItem('algo_access', data.algo_access);
              localStorage.setItem('jwt', data.token);
              localStorage.setItem('loggedInAt', ""+((new Date()).getTime()));
              this.router.parent.navigateByUrl('/dashboard');
          },
          error => {
              console.log("error",error.text());
              window.alert(error.text());
          }
        );
    }
  }
}
