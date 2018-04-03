import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { reorderArray } from 'ionic-angular';

import { Project } from '../models/project.model';
import { Site } from '../models/site.model';

@Injectable()
export class ProjectService {
  private projects: Project[] = [];

  constructor(private storage: Storage) {}

  // Add a new project to the Array. Update local storage. If error adding to storage remove from array
  createProject(title: string,
                manager: string,
                description: string,
                dueDate: Date,
                priority: number,
                done: boolean,
                site: Site) {
    const project = new Project(title, manager, description, dueDate, priority, done, site);
    // Add to array
    this.projects.push(project);
    // Add to Local storage
    this.storage.set('projects', this.projects)
      .then()
      .catch(
        err => {
          // If error adding to Local storage remove from Array
          this.projects.splice(this.projects.indexOf(project), 1);
        }
      );
  }

  // Read all projects
  readProjects() {
    return this.projects;
  }

  // Get project metrics - Count done and not done projects
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

  // Fetch projects from local storage.  If not null return projects otherwise return empty array
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
    // Update array
    this.projects[index] = project;
    // Update local storage
    this.storage.set('projects', this.projects)
      .then()
      .catch(
        err => console.log(err)
      );
  }

  // Delete the project from the Array. Update local storage.
  deleteProject(index: number) {
    // Delete from array
    this.projects.splice(index, 1);
    // Delete from local storage
    this.storage.set('projects', this.projects)
      .then()
      .catch(
        err => console.log(err)
      );
  }

  // Reorder the projects in the Array. Update local storage to new position.
  reorderArray(indexes) {
    // Reorder array
    this.projects = reorderArray(this.projects, indexes);
    // Update array indexes in local storage
    this.storage.set('projects', this.projects)
      .then()
      .catch(
        err => console.log(err)
      );
  }

}
