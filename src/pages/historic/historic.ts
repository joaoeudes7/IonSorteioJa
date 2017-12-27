import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-historic',
  templateUrl: 'historic.html'
})

export class HistoricPage {

  public historic: any;

  constructor(public storage: Storage) {
    this.historic = [];
  }

  ionViewDidEnter() {
    this.historic = JSON.parse(localStorage.getItem("historic"));
  }

}
