import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import {GalleryPage} from '../gallery/gallery';


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  images: any = [];
  constructor(public navCtrl: NavController,
              public imagePicker: ImagePicker) { }

  getPictures() {
    let options = {
      maximumImagesCount: 8,
      width: 500,
      height: 500,
      quality: 75
    }

    this.imagePicker.getPictures(options).then(
      results => { console.log(results) ;
      for (let i=0; i < results.length; i++) {
        this.images.push(results[i]);
      };
    });
  }



  /**
   * Dismiss the page and return to the FAQs Page
   */
  closeSettings() {

  }

}
