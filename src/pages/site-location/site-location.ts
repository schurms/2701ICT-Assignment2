import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Site } from '../../models/site.model';

@Component({
  selector: 'page-site-location',
  templateUrl: 'site-location.html',
})
export class SiteLocationPage {

  site: Site;
  marker: Site;

  constructor(private navParams: NavParams,
              private viewCtrl: ViewController) {
    this.site = this.navParams.get('site');
    if (this.navParams.get('isSet')) {
      this.marker = this.site;
    }
  }

  /**
   * Listen for marker being placed
   * @param event
   */
  onSetMarker(event: any) {
    this.marker = new Site(event.coords.latitude, event.coords.longitude);
  }

  /**
   * Confirm selection of the Site
   */
  onConfirm() {
    this.viewCtrl.dismiss({site: this.marker});
  }

  /**
   * Cancel the Action
   */
  onCancel() {
    this.viewCtrl.dismiss();
  }
}
