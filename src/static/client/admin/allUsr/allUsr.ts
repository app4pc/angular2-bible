/**
 * Created by crm3 on 12/18/2015.
 */
import { Component, AfterViewInit} from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers} from '@angular/http';
import {Router} from '@angular/router';
declare var decreptIt:any;
let template = require('./allUsr.html');

@Component({
    selector: 'allUsr',
    template : template
})

export class AllUsr implements AfterViewInit {
    isLogedIn:Boolean=localStorage.getItem('jwt');
    hdr:Headers = new Headers();
    response:any;
    dtaTableDta:Array<any>;
    dtaTable:any;
    reportArr:Array<any>;
    constructor(public router: Router, public http: Http) {
              
    }
    ngAfterViewInit() {
        jQuery(".lodngChrt").addClass("loaded");
        if(!jQuery(".fa-sign-out").css("display")){
            window.location.reload();
        }
    }
    
    logout() {
        this.isLogedIn=false;
        localStorage.clear();
        window.location.pathname = '/login';
    }
}
