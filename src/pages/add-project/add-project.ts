import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, NavController, ViewController } from 'ionic-angular';

import { SiteLocationPage } from '../site-location/site-location';
import { Site } from '../../models/site.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'page-add-project',
  templateUrl: 'add-project.html'
})
export class AddProjectPage {
  site: Site = {
    lat: -27.5550897,
    lng: 153.0532585
  };

  siteIsSet = false;

  constructor (private projectService: ProjectService,
               private navCtrl: NavController,
               private viewCtrl: ViewController,
               private modalCtrl: ModalController) {
  }

  // Set the cancel button on load
  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Cancel');
  }

  // Save the new project details and reset the site to Griffith
  onSubmit(form: NgForm) {
    this.projectService.createProject(
      form.value.title,
      form.value.manager,
      form.value.description,
      form.value.dueDate,
      form.value.priority,
      form.value.done,
      this.site);

    form.reset();

    this.site = {
      lat: -27.5550897,
      lng: 153.0532585
    };

    this.navCtrl.popToRoot();
  }

  // Open the Select Site Page
  onOpenMap() {
    const modal = this.modalCtrl.create(SiteLocationPage,
      {site: this.site, isSet: this.siteIsSet});
    modal.present();
    modal.onDidDismiss(
      data => {
        if (data) {
          this.site = data.site;
          this.siteIsSet = true;
        }
      }
    );
  }
}
