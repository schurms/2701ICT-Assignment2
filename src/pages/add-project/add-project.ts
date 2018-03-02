import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'page-add-project',
  templateUrl: 'add-project.html'
})
export class AddProjectPage {

  constructor (private projectService: ProjectService,
               private navCtrl: NavController) {
  }

  onSubmit(form: NgForm) {
    this.projectService.createProject(
      form.value.title,
      form.value.manager,
      form.value.description,
      form.value.startDate,
      form.value.endDate);

    form.reset();
    this.navCtrl.popToRoot();
  }


}
