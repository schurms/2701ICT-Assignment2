/**
 * This page is the settings page used to obtain an image.
 */

import { Component } from '@angular/core';
import { NavController, normalizeURL } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  path: string;

  constructor(public navCtrl: NavController,
              public imagePicker: ImagePicker,
              public camera: Camera,
              public storage: Storage) {

    // Get stored image file - will be default if no value stored
    this.storage.get('myImage').then((val) => {
      this.path = val;
    });
  }

  /**
   * Choose an image from the phone gallery as image
   */
  choosePicture() {
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
        // Need to normalizeURL as files can not be in the format file:///
        this.path = normalizeURL(results[i]);
        // Save image to storage
        this.storage.set('myImage', this.path);
        }
      }, err => {
      alert("Error " + err);
    });
  }

  /**
   * Take a photo from the camera to store as image
   */
  takePicture() {
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
      };

    this.camera.getPicture(options).then(url => {
      // Need to normalizeURL as files can not be in the format file:///
      this.path = normalizeURL(url);
      // Save image to storage
      this.storage.set('myImage', this.path);
      }, err => {
      alert("Error " + err);
    });
  }

}
