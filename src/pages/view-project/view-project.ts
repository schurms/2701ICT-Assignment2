import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { EditProjectPage } from '../edit-project/edit-project';

@Component({
  selector: 'page-view-project',
  templateUrl: 'view-project.html',
})
export class ViewProjectPage implements OnInit{

  project: Project;
  index: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private projectService: ProjectService) {
  }

  ngOnInit() {
    this.project = this.navParams.get('project');
    this.index = this.navParams.get('index');
  }

  onEditProject() {
    this.navCtrl.push(EditProjectPage, {project: this.project, index: this.index});
  }

  onDeleteProject() {
    this.projectService.deleteProject(this.index);
    this.navCtrl.popToRoot();
  }

}
