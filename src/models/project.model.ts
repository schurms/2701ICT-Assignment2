import { Site } from './site.model';

export class Project {
  constructor(
    public title: string,
    public manager: string,
    public description: string,
    public dueDate: Date,
    public priority: number,
    public done: boolean,
    public site: Site) {}
}
