import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadosPage } from '../dados/dados';

@IonicPage()
@Component({
  selector: 'page-termos',
  templateUrl: 'termos.html',
})
export class TermosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  avancar(){
    this.navCtrl.setRoot(DadosPage);
  }

}
