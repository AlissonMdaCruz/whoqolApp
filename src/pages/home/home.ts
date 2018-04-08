import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InstrucoesPage } from '../instrucoes/instrucoes';
import { SobrePage } from '../sobre/sobre';

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

  goSobre(){
    this.navCtrl.push(SobrePage);
  }
}
