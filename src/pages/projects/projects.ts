/**
 * This page is the default landing page. It displays the list of projects.
 */

import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

import { ViewProjectPage } from '../view-project/view-project';
import { AddProjectPage } from '../add-project/add-project'
import { EditProjectPage } from '../edit-project/edit-project';

import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  projects: Project[] = [];
  project: Project;
  index: number;

  constructor(public navCtrl: NavController,
              private projectService: ProjectService,
              private alertCtrl: AlertController) {
  }

  /**
   * On entering the view load the projects that have already been retrieved from local storage
   */
  ionViewWillEnter() {
    this.projects = this.projectService.readProjects();
  }

  /**
   * Navigate to the AddProjectPage when the new button is pressed
   */
  onNewProject() {
    this.navCtrl.push(AddProjectPage);
  }

  /**
   * Navigate to the ViewProjectPage when the cell is tapped.  Sent cell index
   * @param {Project} project
   * @param {number} index
   */
  onLoadProject(project: Project, index: number) {
    this.navCtrl.push(ViewProjectPage, {project: project, index: index});
  }

  /**
   * Reorder the array and save the new order to local storage.
   * @param indexes
   */
  reorderItems(indexes) {
   this.projectService.reorderArray(indexes);
  }

  /**
   * Navigate to the EditProjectPage on swiping and tapping on the edit icon
   * @param {Project} project
   * @param {number} index
   */
  onEditProject(project: Project, index: number) {
    this.navCtrl.push(EditProjectPage, {project: project, index: index});
  }

  /**
   * Delete the project at the index.  Show a confirmation message
   * @param {number} index
   */
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
