/**
 * This service handles all data create / read / update / delete activities
 *
 */

import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { reorderArray } from 'ionic-angular';

import { Project } from '../models/project.model';

@Injectable()
export class ProjectService {

  /**
   * Define new project object
   * @type {any[]}
   */
  private projects: Project[] = [];

  constructor(private storage: Storage) {}

  /**
   * Add a new project to the Array. Update local storage. If error adding to storage remove from array
   * @param {string} title
   * @param {string} manager
   * @param {string} description
   * @param {Date} dueDate
   * @param {number} priority
   * @param {boolean} done
   * @param {number} latitude
   * @param {number} longitude
   */
  createProject(title: string,
                manager: string,
                description: string,
                dueDate: Date,
                priority: number,
                done: boolean,
                latitude: number,
                longitude: number) {
    const project = new Project(title, manager, description, dueDate, priority, done, latitude, longitude);
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

  /**
   * Read the project data and return the list of projects
   * @returns {Project[]}
   */
  readProjects() {
    return this.projects;
  }

  /**
   * Get the data required for the project metrics page - Count of done and not done projects
   * @returns {number[]}
   */
  countProjects() {
    let notDoneProjects = 0;
    let doneProjects = 0;
    this.projects.forEach( item =>  {
      if (!item.done) {
        notDoneProjects++;
      } else {
        doneProjects++;
      }
    });
    return [notDoneProjects, doneProjects];
  }

  /**
   * Load projects from local storage.  If not null return projects otherwise return empty array
   * @returns {Promise<Project[] | void>}
   */
  loadProjects() {
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

  /**
   * Update the project in the Array. Update local storage.
   * @param {number} index
   * @param {string} title
   * @param {string} manager
   * @param {string} description
   * @param {Date} dueDate
   * @param {number} priority
   * @param {boolean} done
   * @param {number} latitude
   * @param {number} longitude
   */
  updateProject(index: number,
                title: string,
                manager: string,
                description: string,
                dueDate: Date,
                priority: number,
                done: boolean,
                latitude: number,
                longitude: number) {
    const project = new Project(title, manager, description, dueDate, priority, done, latitude, longitude);
    // Update array
    this.projects[index] = project;
    // Update local storage
    this.storage.set('projects', this.projects)
      .then()
      .catch(
        err => console.log(err)
      );
  }

  /**
   * Delete the project from the Array.  Update local storage.
   * @param {number} index
   */
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

  /**
   * Reorder the projects in the Array.  Update local storage to reflect the new positions.
   * @param indexes
   */
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
