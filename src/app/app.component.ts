import { Component, OnInit, ViewChild } from '@angular/core';
import { App, MenuController, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ProjectService } from '../services/project.service';
import { WelcomePage } from '../pages/welcome/welcome';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  rootPage:any = WelcomePage;

  @ViewChild('nav') navCtrl: NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController,
              private projectService: ProjectService,
              public app: App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  /**
   * Load projects from local storage ready to process
   */
  ngOnInit() {
    this.projectService.loadProjects();
  }

  /**
   * Disable the Swipe Menu on Entering the Welcome Screen
   */
  ionViewDidEnter() {
    this.menuCtrl.swipeEnable(false);
  }


  /**
   * On pressing the logout button close the menu and pop to the Welcome Page
   */
  onLogout() {
    this.menuCtrl.close();
    this.navCtrl.popToRoot();

  }
}
