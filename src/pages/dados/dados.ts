import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionarioPage } from '../questionario/questionario';

@IonicPage()
@Component({
  selector: 'page-dados',
  templateUrl: 'dados.html',
})
export class DadosPage {
  // public ages: Array<number> = [];
  public ages = [
    'Até 20 anos', 'De 21 a 35 anos', 'De 36 a 50 anos', 'De 51 a 65 anos', 'Acima de 65 anos'
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSubmit(form) {
    console.log(form.value);
    this.navCtrl.setRoot(QuestionarioPage, { 'dados': form.value });
  }

}
