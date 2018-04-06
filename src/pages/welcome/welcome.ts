import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {
  }

  /**
   * Navigate the user to the Login Page on pressing enter.
   */
  onLogin() {
    this.navCtrl.push(LoginPage);
  }

}
