import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'page-edit-project',
  templateUrl: 'edit-project.html'
})
export class EditProjectPage {

  project: Project;
  index: number;

  constructor (private navParams: NavParams,
               private projectService: ProjectService,
               private navCtrl: NavController,
               public viewCtrl: ViewController) {

    this.project = this.navParams.get('project');
    this.index = this.navParams.get('index');
  }

  // Set the cancel button on load
  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Cancel');
  }

  // On form submit get the values from the form and send the updated data to
  // the updateProject form
  onSubmit(form: NgForm) {
    this.projectService.updateProject(
      this.index,
      form.value.title,
      form.value.manager,
      form.value.description,
      form.value.dueDate,
      form.value.priority,
      form.value.done);

    form.reset();
    this.navCtrl.popToRoot();
  }

}
