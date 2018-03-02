import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'page-edit-project',
  templateUrl: 'edit-project.html'
})
export class EditProjectPage implements OnInit {

  project: Project;
  index: number;

  constructor (private navParams: NavParams,
               private projectService: ProjectService,
               private navCtrl: NavController) {
  }

  ngOnInit() {
    this.project = this.navParams.get('project');
    this.index = this.navParams.get('index');
  }

  onSubmit(form: NgForm) {
    this.projectService.updateProject(
      this.index,
      form.value.title,
      form.value.manager,
      form.value.description,
      form.value.startDate,
      form.value.endDate);

    form.reset();
    this.navCtrl.popToRoot();
  }

}
