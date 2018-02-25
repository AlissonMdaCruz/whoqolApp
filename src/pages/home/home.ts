import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InstrucoesPage } from '../instrucoes/instrucoes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  responder(){
    this.navCtrl.push(InstrucoesPage);
  }
}
