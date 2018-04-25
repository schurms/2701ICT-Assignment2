/**
 * Page to edit a project
 */

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, NavController, NavParams, ViewController } from 'ionic-angular';

import { SiteLocationPage } from '../site-location/site-location';

import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'page-edit-project',
  templateUrl: 'edit-project.html'
})
export class EditProjectPage {

  //Variables
  latitude: number;
  longitude: number;
  locationSet = true;
  project: Project;
  index: number;

  constructor (private navParams: NavParams,
               private projectService: ProjectService,
               private navCtrl: NavController,
               private viewCtrl: ViewController,
               private modalCtrl: ModalController) {

    this.project = this.navParams.get('project');
    this.index = this.navParams.get('index');

    this.latitude = this.project.latitude;
    this.longitude = this.project.longitude;
  }

  /**
   * On loading the Page change the back button to read "Cancel"
   */
  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Cancel');
  }

  /**
   * On form submit get the values from the form and send the updated data to be updated
   * @param {NgForm} form
   */
  onSubmit(form: NgForm) {
    this.projectService.updateProject(
      this.index,
      form.value.title,
      form.value.manager,
      form.value.description,
      form.value.dueDate,
      form.value.priority,
      form.value.done,
      this.latitude,
      this.longitude);

    form.reset();

    this.navCtrl.popToRoot();
  }

  /**
   * Function to load the Site Modal to allow selection of a site.
   */
  onSelectSite() {
    const modal = this.modalCtrl.create(SiteLocationPage,
      {latitude: this.project.latitude, longitude: this.project.longitude, locationSet: this.locationSet});
    modal.present();
    modal.onDidDismiss(
      data => {
        if (data) {
          this.latitude = data.latitude;
          this.longitude = data.longitude;
          this.locationSet = true;
        }
      }
    );
  }

}
