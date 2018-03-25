import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Faq } from '../../models/faq.model';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  faq: Faq;

  constructor(public navParams: NavParams, public viewCrtl: ViewController ) {
    this.faq = this.navParams.get('faq');
  }

  closeFaq() {
    this.viewCrtl.dismiss();
  }

}
