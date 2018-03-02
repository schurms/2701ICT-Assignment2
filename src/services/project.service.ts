import { Project } from '../models/project.model';

export class ProjectService {
  private projects: Project[] = [];

  createProject(title: string,
             manager: string,
             description: string,
             startDate: Date,
             endDate: Date) {
    this.projects.push(new Project(title, manager, description, startDate, endDate));
  }

  readProjects() {
    return this.projects;
  }

  updateProject(index: number,
                title: string,
                manager: string,
                description: string,
                startDate: Date,
                endDate: Date) {
    this.projects[index] = new Project(title, manager, description, startDate, endDate);
  }

  deleteProject(index: number) {
    this.projects.splice(index, 1);
  }
}
