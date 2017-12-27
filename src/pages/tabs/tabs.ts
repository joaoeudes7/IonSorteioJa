import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HistoricPage } from '../historic/historic';
import { HomePage } from '../home/home';
import { RandomNamesPage } from './../random-names/random-names';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = HistoricPage;
  tab4Root = RandomNamesPage;

  constructor() {

  }
}
