export class Project {
  constructor(
    public title: string,
    public manager: string,
    public description: string,
    public startDate: Date,
    public endDate: Date,
    public taskEffort: number,
    public done: boolean) {}
}
