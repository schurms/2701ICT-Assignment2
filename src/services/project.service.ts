import { Project } from '../models/project.model';

export class ProjectService {
  private projects: Project[] = [];

  createProject(title: string,
                manager: string,
                description: string,
                startDate: Date,
                endDate: Date,
                done: boolean) {
    this.projects.push(new Project(title, manager, description, startDate, endDate, done));
  }

  readProjects() {
    return this.projects;
  }

  updateProject(index: number,
                title: string,
                manager: string,
                description: string,
                startDate: Date,
                endDate: Date,
                done: boolean) {
    this.projects[index] = new Project(title, manager, description, startDate, endDate, done);
  }

  deleteProject(index: number) {
    this.projects.splice(index, 1);
  }
}
