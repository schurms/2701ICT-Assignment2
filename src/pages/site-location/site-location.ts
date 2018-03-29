import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-site-location',
  templateUrl: 'site-location.html',
})
export class SiteLocationPage {

  constructor(private viewCtrl: ViewController) {

  }

  // Confirm selection of Site
  onConfirm() {
    this.viewCtrl.dismiss();
  }

  // Cancel action
  onCancel() {
    this.viewCtrl.dismiss();
  }
}
