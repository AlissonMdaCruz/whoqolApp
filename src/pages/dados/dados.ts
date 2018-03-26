import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionarioPage } from '../questionario/questionario';

@IonicPage()
@Component({
  selector: 'page-dados',
  templateUrl: 'dados.html',
})
export class DadosPage {
  private ages: Array<number> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 2; i <= 120; i++) {
      this.ages.push(i);
    }
  }

  onSubmit(form) {
    this.navCtrl.setRoot(QuestionarioPage, { 'dados': form.value });
  }

}
