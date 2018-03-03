import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import questions from '../../model/questoes';
import { FinalPage } from '../final/final';

@IonicPage()
@Component({
  selector: 'page-questionario',
  templateUrl: 'questionario.html',
})
export class QuestionarioPage {
  @ViewChild(Slides) slides: Slides;

  perguntas: any[] = questions;
  valor: any[];
  final: boolean = false;
  info: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.iniciarValores();
    this.info = this.navParams.get('info');
  }

  ionViewDidLoad() {
    this.slides.lockSwipes(true);
  }

  iniciarValores() {
    this.valor = [];
    this.perguntas.forEach(() => this.valor.push(null));
  }

  next() {
    if (this.valor[this.slides.getActiveIndex()] !== null) {
      this.slides.lockSwipeToNext(false);
      this.slides.slideNext(500, true);
      this.slides.lockSwipeToNext(true);
    }
  }

  finalizar() {
    this.navCtrl.setRoot(FinalPage, { 'info': this.info, 'resp': this.valor });
  }

  slideChanged() {
    this.final = this.slides.isEnd();
  }

}
