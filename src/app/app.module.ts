import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FaqPage } from '../pages/faq/faq';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage}  from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProjectsPage } from '../pages/projects/projects';
import { AddProjectPage } from '../pages/add-project/add-project';
import { EditProjectPage } from '../pages/edit-project/edit-project';
import { ViewProjectPage } from '../pages/view-project/view-project';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Autosize } from '../directives/autosize/autosize';
import { ProjectService } from '../services/project.service';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    FaqPage,
    ProjectsPage,
    AddProjectPage,
    EditProjectPage,
    ViewProjectPage,
    TabsPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    Autosize
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FaqPage,
    ProjectsPage,
    AddProjectPage,
    EditProjectPage,
    ViewProjectPage,
    TabsPage,
    WelcomePage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProjectService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
