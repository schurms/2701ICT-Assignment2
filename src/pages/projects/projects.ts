import { Component } from '@angular/core';
import { AlertController, NavController, reorderArray } from 'ionic-angular';

import { AddProjectPage } from '../add-project/add-project'
import { ViewProjectPage} from '../view-project/view-project';

import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { EditProjectPage } from '../edit-project/edit-project';

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  projects: Project[];
  project: Project;
  index: number;

  constructor(public navCtrl: NavController,
              private projectService: ProjectService,
              private alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    this.projects = this.projectService.readProjects();
  }

  onNewProject() {
    this.navCtrl.push(AddProjectPage);
  }

  onLoadProject(project: Project, index: number) {
    this.navCtrl.push(ViewProjectPage, {project: project, index: index});
  }

  reorderItems(indexes) {
    this.projects = reorderArray(this.projects, indexes);
  }

  onEditProject(project: Project, index: number) {
    this.navCtrl.push(EditProjectPage, {project: project, index: index});
  }

  onDeleteProject(index: number) {
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
            this.projectService.deleteProject(index);
          }
        }
      ]
    });
    alert.present();
  }

}
