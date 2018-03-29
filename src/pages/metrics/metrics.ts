import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'page-metrics',
  templateUrl: 'metrics.html',
})
export class MetricsPage {

  metrics: any;
  numNotDone: number;
  numDone: number;

  public doughnutChartLabels:string[] = ['Completed Projects', 'In Progress Projects'];
  public doughnutChartData:number[];
  public doughnutChartType:string = 'doughnut';


  constructor(private projectService: ProjectService) {
    this.metrics = this.projectService.countProjects();
    this.numNotDone = this.metrics[0];
    this.numDone = this.metrics[1];
    this.doughnutChartData = [this.numDone, this.numNotDone]
  }
  
  ionViewDidEnter() {
    this.metrics = this.projectService.countProjects();
    this.numNotDone = this.metrics[0];
    this.numDone = this.metrics[1];
    this.doughnutChartData = [this.numDone, this.numNotDone];
  }


}
