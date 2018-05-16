/**
 * Define setup for the tabs at bottom of page
 */

import { Component } from '@angular/core';

import { ProjectsPage } from '../projects/projects';
import { MetricsPage } from '../metrics/metrics';
import { FaqPage } from '../faq/faq';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProjectsPage;
  tab2Root = MetricsPage;
  tab3Root = FaqPage;

  constructor() {

  }
}
