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
  // Provide initial latitude/longitude values
  site: Site = {
    latitude: -27.5550897,
    longitude: 153.0532585
  };

  siteIsSet = false;

  constructor (private projectService: ProjectService,
               private navCtrl: NavController,
               private viewCtrl: ViewController,
               private modalCtrl: ModalController) {
  }

  /**
   * Set the cancel button on load
   */
  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Cancel');
  }
  
  /**
   * Save the new project details and reset the site to Griffith Uni
   * @param {NgForm} form
   */
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
      latitude: -27.5550897,
      longitude: 153.0532585
    };

    this.navCtrl.popToRoot();
  }

  /**
   * Open the Select Site Page
   */
  onSelectSite() {
    const modal = this.modalCtrl.create(SiteLocationPage,
      {site: this.site, isSet: this.siteIsSet});
    modal.present();
    // if returning and a site was selected set data
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
