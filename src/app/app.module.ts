import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FaqPage } from '../pages/faq/faq';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage}  from '../pages/login/login';
import { ProjectsPage } from '../pages/projects/projects';
import { AddProjectPage } from '../pages/add-project/add-project';
import { EditProjectPage } from '../pages/edit-project/edit-project';
import { ViewProjectPage } from '../pages/view-project/view-project';
import { ViewFaqPage } from '../pages/view-faq/view-faq';
import { MetricsPage } from '../pages/metrics/metrics';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Autosize } from '../directives/autosize/autosize';
import { ProjectService } from '../services/project.service';
import { IonicStorageModule } from '@ionic/storage';
import { ChartsModule } from 'ng2-charts';
import {WelcomePage} from '../pages/welcome/welcome';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    FaqPage,
    ProjectsPage,
    AddProjectPage,
    EditProjectPage,
    ViewProjectPage,
    ViewFaqPage,
    TabsPage,
    LoginPage,
    MetricsPage,
    Autosize
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    FaqPage,
    ProjectsPage,
    AddProjectPage,
    EditProjectPage,
    ViewProjectPage,
    ViewFaqPage,
    TabsPage,
    LoginPage,
    MetricsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProjectService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
