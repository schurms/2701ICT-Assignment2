import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ProjectService } from '../services/project.service';
import { WelcomePage } from '../pages/welcome/welcome';
import { SettingsPage } from '../pages/settings/settings';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomePage;

  @ViewChild('nav') navCtrl: NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private storage: Storage,
              private menuCtrl: MenuController,
              private projectService: ProjectService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    /**
     * Load projects from local storage ready to process
     */
    this.projectService.loadProjects();

    // Retrieve settings details from Local Storage
    this.storage.get('myImage').then((val) => {

      // If first time logging in values will be null so set initial values
      if (val == null) {

        // Save initial settings to Local Storage
        this.storage.set('myImage', 'assets/imgs/no-image.png');
      }
    });
  }

  /**
   * On pressing the logout button close the menu and pop to the Welcome Page
   */
  onLogout() {
    this.menuCtrl.close();
    this.navCtrl.popToRoot();
  }

  /**
   * On pressing the setting button open the Setting Page
   */
  onSettings() {
    this.navCtrl.push(SettingsPage);
  }

}
