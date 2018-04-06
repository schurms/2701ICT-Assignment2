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
   * Enable the Swipe Menu on Leaving the Welcome Screen
   */
  ionViewWillLeave() {
    this.menuCtrl.swipeEnable(true);
  }

  // Navigate the User to the Login Page on Pressing Enter
  /**
   * Navigate the user to the Login Page on pressing enter.
   */
  onLogin() {
    this.navCtrl.push(LoginPage);
  }

}
