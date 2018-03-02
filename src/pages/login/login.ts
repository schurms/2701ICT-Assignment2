import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private projectService: ProjectService) {
  }

  onLogin(form: NgForm) {
    // Load some dummy data
    this.projectService.createProject("Project 1","Manager 1","This project is about ABC.",new Date(),new Date());
    this.projectService.createProject("Project 2","Manager 2","This project is about ABC.",new Date(),new Date());

    this.username = form.value.username;
    this.password = form.value.password;
    // validate username and password combination
    // console.log(this.username, this.password);
    this.navCtrl.push(TabsPage);
  }
}
