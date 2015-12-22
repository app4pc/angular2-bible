import {Component, View} from 'angular2/angular2';
import { Router, RouterLink } from 'angular2/router';
import {status, json} from '../utils/fetch'
import {Const} from '../utils/const';

let styles   = require('./login.css');
let template = require('./login.html');

@Component({
  selector: 'login'
})
@View({
  directives: [RouterLink],
  template: template,
  styles: [ styles ]
})
export class Login {
  constructor(public router: Router) {
  }

  login(event, username, password) {
    event.preventDefault();
    window.fetch(Const().serviceUrl+'/sessions/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, password
      })
    })
    .then(status)
    .then(json)
    .then((response:any) => {
      localStorage.setItem('jwt', response.id_token);
      console.log("came here",event,username,password);
      this.router.parent.navigateByUrl('/home/game2');
    })
    .catch((error) => {
      //alert(error.message);
      console.log(error.message);
    });
  }

  signup(event) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/signup');
  }
}
