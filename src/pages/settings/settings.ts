import { Component } from '@angular/core';
import { NavController, normalizeURL } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';

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

  path: string;
  constructor(public navCtrl: NavController,
              public imagePicker: ImagePicker,
              public camera: Camera) {

    this.path = 'assets/imgs/no-image.png';
  }

  choosePictures() {
    let options = {
      title: 'Select Picture',
      message: 'Select at Least 1 Picture',
      maximumImagesCount: 1,
      width: 500,
      height: 500,
      quality: 75,
      outType: 0 // 0 = PATH, 1 = BASE64
    };

    this.imagePicker.getPictures(options).then(results => {
      for (var i = 0; i < results.length; i++) {
        this.path = normalizeURL(results[i]);
      }
    }, err => { });
  }

  takePictures() {
    let options : CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(url => {
      this.path = normalizeURL(url);
    }, err => { });
  }

}
