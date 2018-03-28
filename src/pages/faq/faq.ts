import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Faq } from '../../models/faq.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html'
})
export class FaqPage {

  faqs: Faq[];
  index: number;
  numNotDone: number;
  numDone: number;

  constructor(public navCtrl: NavController, private modal: ModalController, private projectService: ProjectService) {

    this.faqs = [
      {
        name: 'Add a Project',
        description: 'To add a new project select the + in the top right of the screen. ' +
        'The Add Project page is displayed.  Information can be added.  All fields except the end date are mandatory'
      },
      {
        name: 'Delete a Project',
        description: 'To delete an existing project there are two methods. The first method is from the ' +
        'Projects Screen.  For the selected item, slide left and select "Delete". The second method is to ' +
        'click on the selected item.  The Project Detail page is displayed and you can select the' +
        ' "Delete Project" button.'},
      {
        name: 'Update a Project',
        description: 'To edit an existing project there are two methods. The first method is from the Projects' +
        ' Screen. For the selected item, slide right and select "Edit". The second method is to click on the ' +
        'selected item. The Project Detail page is displayed and you can select the "Edit" button.  At the Edit' +
        ' Project Page you can update information and save the detail. All fields except the end date are' +
        ' mandatory.'}
    ];

  }

  ionViewWillEnter() {
    this.numNotDone = this.projectService.countNotDoneProjects();
    this.numDone = this.projectService.countDoneProjects()
    console.log(this.numNotDone, this.numDone);
  }


  // Load the Faq detail page as a modal
  onLoadFaq(faq: Faq, index: number) {
    const faqModal = this.modal.create('ViewFaqPage', {faq: faq, index: index});

    faqModal.present();
  }

}
