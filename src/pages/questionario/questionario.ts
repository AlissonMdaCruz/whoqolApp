import { DadosModel } from './../../model/dados.model';
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
  dados: DadosModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.iniciarValores();
    this.dados = this.navParams.get('dados');
  }

  ionViewDidLoad() {
    this.slides.lockSwipes(true);
  }

  iniciarValores() {
    this.valor = [];
    this.perguntas.forEach(() => this.valor.push(null));
  }

  next() {
    this.slides.lockSwipeToNext(false);
    this.slides.slideNext(500, true);
    this.slides.lockSwipeToNext(true);
  }

  finalizar() {
    this.navCtrl.setRoot(FinalPage, { 'dados': this.dados, 'resp': this.valor });
  }

  slideChanged() {
    this.final = this.slides.isEnd();
  }

}
