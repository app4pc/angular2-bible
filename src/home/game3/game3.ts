/**
 * Created by crm3 on 12/18/2015.
 */
import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {Location, RouteConfig, RouterLink, Router} from 'angular2/router';

let styles = require('./game3.css');
let template = require('./game3.html');

@Component({
    selector: 'last-test'
})
@View({
    template : template,
    styles: [styles]
})

export class Game3 {
    constructor() {

    }
}



