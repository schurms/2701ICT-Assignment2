import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

import { Project } from '../models/project.model';
import { reorderArray } from 'ionic-angular';

@Injectable()
export class ProjectService {
  private projects: Project[] = [];

  constructor(private storage: Storage) {}

  // Add a new project
  createProject(title: string,
                manager: string,
                description: string,
                startDate: Date,
                endDate: Date,
                done: boolean) {
    const project = new Project(title, manager, description, startDate, endDate, done);
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

  // Fetch projects from storage
  fetchProjects() {
    this.storage.get('projects')
      .then(
        (projects: Project[]) => {
          this.projects = projects != null ? projects : [];
        }
      )
      .catch();
  }

  //
  updateProject(index: number,
                title: string,
                manager: string,
                description: string,
                startDate: Date,
                endDate: Date,
                done: boolean) {
    const project = new Project(title, manager, description, startDate, endDate, done);
    this.projects[index] = project;
    this.storage.set('projects', this.projects)
      .then()
      .catch();
  }

  deleteProject(index: number) {
    this.projects.splice(index, 1);
    this.storage.set('projects', this.projects)
      .then()
      .catch();
  }

  reorderArray(indexes) {
    this.projects = reorderArray(this.projects, indexes);
    this.storage.set('projects', this.projects)
      .then()
      .catch();
  }

}
