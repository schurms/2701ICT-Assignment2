/**
 * Page to display project metrics
 */

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

  // Doughnut Chart Properties
  public doughnutChartLabels:string[] = ['Completed Projects', 'In Progress Projects'];
  public doughnutChartData:number[];
  public doughnutChartType:string = 'doughnut';

  // Bar Chart Properties
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public barChartLabels:string[] = ['Projects'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[];

  constructor(private projectService: ProjectService) {
    this.metrics = this.projectService.countProjects();
    this.numNotDone = this.metrics[0];
    this.numDone = this.metrics[1];
    this.doughnutChartData = [this.numDone, this.numNotDone]
    this.barChartData = [
      { data: [this.numDone], label: 'Completed Projects' },
      { data: [this.numNotDone], label: 'in Progress Projects' }
    ];
  }

  /**
   * Display the charts on opening the page
   */
  ionViewDidEnter() {
    this.metrics = this.projectService.countProjects();
    this.numNotDone = this.metrics[0];
    this.numDone = this.metrics[1];
    this.doughnutChartData = [this.numDone, this.numNotDone];
    this.barChartData = [
      { data: [this.numDone], label: 'Completed Projects' },
      { data: [this.numNotDone], label: 'in Progress Projects' }
    ];
  }


}
