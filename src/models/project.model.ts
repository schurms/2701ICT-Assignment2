/**
 * This data model defines the structure of the Project class
 *
 */

export class Project {
  constructor(
    public title: string,
    public manager: string,
    public description: string,
    public dueDate: Date,
    public priority: number,
    public done: boolean,
    public latitude: number,
    public longitude: number) {}
}
