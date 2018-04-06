import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import {Faq } from '../../models/faq.model';

@Component({
  selector: 'page-view-faq',
  templateUrl: 'view-faq.html',
})
export class ViewFaqPage {

  faq: Faq;

  constructor(public navParams: NavParams,
              public viewCrtl: ViewController ) {
    this.faq = this.navParams.get('faq');
  }

  /**
   * Dismiss the page and return to the FAQs Page
   */
  closeFaq() {
    this.viewCrtl.dismiss();
  }

}
