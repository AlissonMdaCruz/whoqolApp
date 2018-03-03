import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TermosPage } from '../termos/termos';

@Component({
  selector: 'page-instrucoes',
  templateUrl: 'instrucoes.html',
})
export class InstrucoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  avancar(){
    this.navCtrl.push(TermosPage);
  }

}
