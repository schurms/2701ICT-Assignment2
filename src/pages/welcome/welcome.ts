/**
 * This page is the default page displayed on loading the application.
 * This page is also displayed on logout of the application.
 * The user must press the login button to continue.
 */

import { Component } from '@angular/core';
import { MenuController, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private menuCtrl: MenuController) {
  }

  /**
   * Disable the Swipe Menu on Entering the Welcome Screen
   */
  ionViewDidEnter() {
    this.menuCtrl.swipeEnable(false);
  }

  /**
   * Navigate the user to the Login Page on pressing enter.
   */
  onLogin() {
    this.navCtrl.push(LoginPage);
  }

}
