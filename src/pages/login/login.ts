import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private loadingCtrl: LoadingController) {
  }

  // Accept input and Log the user on
  onLogin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Logging you in...'
    });
    loading.present();


    // Timeout Loading Controller
    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.push(TabsPage);
    }, 700);
    this.username = form.value.username;
    this.password = form.value.password;
  }

}
