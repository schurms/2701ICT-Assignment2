import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage}  from '../pages/login/login';
import { ProjectsPage } from '../pages/projects/projects';
import { AddProjectPage } from '../pages/add-project/add-project';
import { EditProjectPage } from '../pages/edit-project/edit-project';
import { ViewProjectPage } from '../pages/view-project/view-project';
import { SiteLocationPage } from '../pages/site-location/site-location';
import { MetricsPage } from '../pages/metrics/metrics';
import { FaqPage } from '../pages/faq/faq';
import { ViewFaqPage } from '../pages/view-faq/view-faq';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';

import { Autosize } from '../directives/autosize/autosize';
import { ProjectService } from '../services/project.service';
import { IonicStorageModule } from '@ionic/storage';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    ProjectsPage,
    AddProjectPage,
    EditProjectPage,
    ViewProjectPage,
    SiteLocationPage,
    MetricsPage,
    FaqPage,
    ViewFaqPage,
    SettingsPage,
    TabsPage,
    Autosize
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSKm2QcBJ8DmXNE9LFayjkUpUJmAC33xc'
    }),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    ProjectsPage,
    AddProjectPage,
    EditProjectPage,
    ViewProjectPage,
    SiteLocationPage,
    MetricsPage,
    FaqPage,
    ViewFaqPage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProjectService,
    ImagePicker,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
