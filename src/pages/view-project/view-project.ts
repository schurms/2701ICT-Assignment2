import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
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
              private alertCtrl: AlertController) {

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

}
