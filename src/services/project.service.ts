import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

import { Project } from '../models/project.model';
import { reorderArray } from 'ionic-angular';

@Injectable()
export class ProjectService {
  private projects: Project[] = [];

  constructor(private storage: Storage) {}

  // Add a new project to the Array. Update local storage.
  createProject(title: string,
                manager: string,
                description: string,
                startDate: Date,
                endDate: Date,
                taskEffort: number,
                done: boolean) {
    const project = new Project(title, manager, description, startDate, endDate, taskEffort, done);
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

  // Count number of not done projects
  countNotDoneProjects() {
    let count = 0;
    this.projects.forEach( item =>  {
      if (!item.done) {
        count++;
      }
    })
    return count;
  }

  // Count number of done projects
  countDoneProjects() {
    let count = 0;
    this.projects.forEach( item =>  {
      if (item.done) {
        count++;
      }
    })
    return count;
  }

  // Fetch projects from local storage.
  fetchProjects() {
    this.storage.get('projects')
      .then(
        (projects: Project[]) => {
          this.projects = projects != null ? projects : [];
        }
      )
      .catch();
  }

  // Update the project in the Array.  Update local storage.
  updateProject(index: number,
                title: string,
                manager: string,
                description: string,
                startDate: Date,
                endDate: Date,
                taskEffort: number,
                done: boolean) {
    const project = new Project(title, manager, description, startDate, endDate, taskEffort, done);
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
