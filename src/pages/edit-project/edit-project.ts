import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, NavController, NavParams, ViewController } from 'ionic-angular';

import { SiteLocationPage } from '../site-location/site-location';
import { Site } from '../../models/site.model';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'page-edit-project',
  templateUrl: 'edit-project.html'
})
export class EditProjectPage {
  site: Site;

  siteIsSet = true;
  project: Project;
  index: number;

  constructor (private navParams: NavParams,
               private projectService: ProjectService,
               private navCtrl: NavController,
               private viewCtrl: ViewController,
               private modalCtrl: ModalController) {

    this.project = this.navParams.get('project');
    this.index = this.navParams.get('index');
  }

  // Set the cancel button on load
  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Cancel');
  }

  // On form submit get the values from the form and send the updated data to
  // the updateProject form
  onSubmit(form: NgForm) {
    this.projectService.updateProject(
      this.index,
      form.value.title,
      form.value.manager,
      form.value.description,
      form.value.dueDate,
      form.value.priority,
      form.value.done,
      this.project.site);

    form.reset();

    this.navCtrl.popToRoot();
  }

  // Open the Select Site Page
  onSelectSite() {
    const modal = this.modalCtrl.create(SiteLocationPage,
      {site: this.project.site, isSet: this.siteIsSet});
    modal.present();
    modal.onDidDismiss(
      data => {
        if (data) {
          this.project.site = data.site;
          this.siteIsSet = true;
        }
      }
    );
  }

}
