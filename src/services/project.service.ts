import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { reorderArray } from 'ionic-angular';

import { Project } from '../models/project.model';
import { Site } from '../models/site.model';

@Injectable()
export class ProjectService {
  private projects: Project[] = [];

  constructor(private storage: Storage) {}

  // Add a new project to the Array. Update local storage.
  createProject(title: string,
                manager: string,
                description: string,
                dueDate: Date,
                priority: number,
                done: boolean,
                site: Site) {
    const project = new Project(title, manager, description, dueDate, priority, done, site);
    this.projects.push(project);
    this.storage.set('projects', this.projects)
      .then()
      .catch(
        err => {
          this.projects.splice(this.projects.indexOf(project), 1);
        }
      );
  }

  // Read all projects
  readProjects() {
    return this.projects;
  }

  // Get project metrics
  countProjects() {
    let notDoneProjects = 0;
    let doneProjects = 0;
    this.projects.forEach( item =>  {
      if (!item.done) {
        notDoneProjects++;
      } else {
        doneProjects++;
      }
    })
    return [notDoneProjects, doneProjects];
  }

  // Fetch projects from local storage.
  fetchProjects() {
    return this.storage.get('projects')
      .then(
        (projects: Project[]) => {
          this.projects = projects != null ? projects : [];
          return this.projects;
        }
      )
      .catch(
        err => console.log(err)
      );
  }

  // Update the project in the Array.  Update local storage.
  updateProject(index: number,
                title: string,
                manager: string,
                description: string,
                dueDate: Date,
                priority: number,
                done: boolean,
                site: Site) {
    const project = new Project(title, manager, description, dueDate, priority, done, site);
    this.projects[index] = project;
    this.storage.set('projects', this.projects)
      .then()
      .catch();
  }

  // Delete the project from the Array. Update local storage.
  deleteProject(index: number) {
    this.projects.splice(index, 1);
    this.storage.set('projects', this.projects)
      .then()
      .catch();
  }

  // Reorder the projects in the Array. Update local storage.
  reorderArray(indexes) {
    this.projects = reorderArray(this.projects, indexes);
    this.storage.set('projects', this.projects)
      .then()
      .catch();
  }

}
