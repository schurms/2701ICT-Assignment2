import { Component } from '@angular/core';
import { NavController, reorderArray} from 'ionic-angular';

import { AddProjectPage } from '../add-project/add-project'
import { ViewProjectPage} from '../view-project/view-project';

import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  projects: Project[];

  constructor(public navCtrl: NavController,
              private projectService: ProjectService) {
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

}
