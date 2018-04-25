/**
 * Page displays the list of available FAQs.
 */

import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { ViewFaqPage } from '../view-faq/view-faq';

import { Faq } from '../../models/faq.model';

@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html'
})
export class FaqPage {

  faqs: Faq[];
  index: number;

  constructor(private modalCtrl: ModalController) {

    // Load initial FAQ data
    this.loadData()

  }

  /**
   * Function for viewing a FAQ. Navigate user to the View FAQ Page.
   */
  onLoadFaq(faq: Faq, index: number) {
    const modal = this.modalCtrl.create(ViewFaqPage, {faq: faq, index: index});
    modal.present();
  }

  /**
   * Function to load FAQ data.
   */
  loadData() {
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

}
