import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-site-location',
  templateUrl: 'site-location.html',
})
export class SiteLocationPage {

  latitude: number;
  longitude: number;
  locationSet: boolean;

  constructor(private navParams: NavParams,
              private viewCtrl: ViewController) {
    this.latitude = this.navParams.get('latitude');
    this.longitude = this.navParams.get('longitude');
    this.locationSet = this.navParams.get('isSet');

  }

  /**
   * Listen for marker being placed (must be .lat and .lng)
   * @param event
   */
  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationSet = true;
  }

  /**
   * Confirm selection of the Site
   */
  onConfirm() {
    this.viewCtrl.dismiss({latitude: this.latitude, longitude: this.longitude});
  }

  /**
   * Cancel the Action
   */
  onCancel() {
    this.viewCtrl.dismiss();
  }
}
