import { Component } from '@angular/core';
import {ActionSheetController, AlertController, NavController, NavParams, Platform} from 'ionic-angular';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { EditProjectPage } from '../edit-project/edit-project';

@Component({
  selector: 'page-view-project',
  templateUrl: 'view-project.html',
})
export class ViewProjectPage{

  project: Project;
  index: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private projectService: ProjectService,
              private alertCtrl: AlertController,
              private actionsheetCtrl: ActionSheetController,
              public platform: Platform) {

    this.project = this.navParams.get('project');
    this.index = this.navParams.get('index');

  }

  onEditProject() {
    this.navCtrl.push(EditProjectPage, {project: this.project, index: this.index});
  }

  onDeleteProject() {
    let alert = this.alertCtrl.create({
      title: 'Project Deletion!',
      message: 'Do you want to delete this project?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Continue',
          handler: () => {
            this.projectService.deleteProject(this.index);
            this.navCtrl.popToRoot();
          }
        }
      ]
    });
    alert.present();
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Select Action',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete Project',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            this.onDeleteProject();
          }
        },
        {
          text: 'Edit Project',
          icon: 'create',
          cssClass: 'EditIcon',
          handler: () => {
            this.onEditProject();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


}
