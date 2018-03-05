import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private projectService: ProjectService) {
  }

  onSignup(form: NgForm) {
    // Load some dummy data
    var newStartDate = new Date('2018-01-01').toISOString().substring(0,10);
    var newEndDate = new Date('2018-01-01').toISOString().substring(0,10);

    this.projectService.createProject("Project 1", "Manager 1", "This project is about ABC.", newStartDate, newEndDate);
    this.projectService.createProject("Project 2", "Manager 2", "This project is about ABC.", newStartDate, newEndDate);

    this.username = form.value.username;
    this.password = form.value.password;
    // validate username and password combination
    // console.log(this.username, this.password);

    this.navCtrl.push(TabsPage);
  }

}
