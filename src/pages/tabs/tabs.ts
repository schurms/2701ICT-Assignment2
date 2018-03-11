import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ProjectsPage } from '../projects/projects';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProjectsPage;
  tab2Root = AboutPage;

  constructor() {

  }
}
