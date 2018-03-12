import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Faq } from '../../models/faq.model';

@Component({
  selector: 'page-view-faq',
  templateUrl: 'view-faq.html',
})
export class ViewFaqPage {

  faq: Faq;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.faq = this.navParams.get('faq');

  }

}
