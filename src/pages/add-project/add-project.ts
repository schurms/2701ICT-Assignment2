import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, NavController, ViewController } from 'ionic-angular';
import { ProjectService } from '../../services/project.service';
import {SiteLocationPage} from '../site-location/site-location';

@Component({
  selector: 'page-add-project',
  templateUrl: 'add-project.html'
})
export class AddProjectPage {


  constructor (private projectService: ProjectService,
               private navCtrl: NavController,
               public viewCtrl: ViewController,
               private modalCtrl: ModalController) {
  }

  // Set the cancel button on load
  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Cancel');
  }

  onSubmit(form: NgForm) {
    this.projectService.createProject(
      form.value.title,
      form.value.manager,
      form.value.description,
      form.value.dueDate,
      form.value.priority,
      form.value.done);

    form.reset();
    this.navCtrl.popToRoot();
  }

  // Open the Select Site Page
  onSelectSite() {
    const modal = this.modalCtrl.create(SiteLocationPage);
    modal.present();
  }

}
