import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionarioPage } from '../questionario/questionario';

@IonicPage()
@Component({
  selector: 'page-dados',
  templateUrl: 'dados.html',
})
export class DadosPage {
  info: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  avancar(){
    this.navCtrl.setRoot(QuestionarioPage, {'info': this.info});
  }

}
