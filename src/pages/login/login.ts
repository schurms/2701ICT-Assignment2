import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLogin(form: NgForm) {
    this.username = form.value.username;
    this.password = form.value.password;
    // validate username and password combination
    // console.log(this.username, this.password);
    this.navCtrl.push(TabsPage);
  }
}
