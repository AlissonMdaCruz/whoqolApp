import { DadosModel } from './../../model/dados.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { HomePage } from '../home/home';
import Pesquisa from '../../model/pesquisa';
import { ScoreModel } from '../../model/score.model';

@IonicPage()
@Component({
  selector: 'page-final',
  templateUrl: 'final.html',
})
export class FinalPage {

  pesquisaCollection: AngularFirestoreCollection<Pesquisa>;
  pesquisa: Observable<Pesquisa[]>;
  respostas: number[];
  dados: DadosModel;
  consideracoes: any = {};
  score: ScoreModel = new ScoreModel();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private afs: AngularFirestore
  ) {

    this.pesquisaCollection = this.afs.collection('pesquisa');
    this.pesquisa = this.pesquisaCollection.valueChanges();

    this.respostas = this.navParams.get('resp');
    this.dados = this.navParams.get('dados');
    this.calcularScore(this.respostas);
  }
  //calcula o resultado
  calcularScore(ar: Array<number>) {
    this.score.fisico = parseFloat((((((((6 - ar[2]) + (6 - ar[3]) + ar[9] + ar[14] + ar[15] + ar[16] + ar[17]) / 7) * 4) - 4) / 16) * 100).toFixed(1));
    this.score.psicologico = parseFloat(((((((ar[4] + ar[5] + ar[6] + ar[10] + ar[18] + (6 - ar[25])) / 6) * 4) - 4) / 16) * 100).toFixed(1));
    this.score.relacoesSociais = parseFloat(((((((ar[19] + ar[20] + ar[21]) / 3) * 4) - 4) / 16) * 100).toFixed(1));
    this.score.meioAmbiente = parseFloat(((((((ar[7] + ar[8] + ar[11] + ar[12] + ar[13] + ar[22] + ar[23] + ar[24]) / 8) * 4) - 4) / 16) * 100).toFixed(1));
    this.score.scoreFinal = parseFloat(((this.score.fisico + this.score.psicologico + this.score.relacoesSociais + this.score.meioAmbiente) / 4).toFixed(1));
  }

  presentAlert(titulo: string, subtitulo: string) {
    let alert = this.alertCtrl.create({
      title: 'Fim do Questionário',
      subTitle: 'Agradecemos pela sua participação',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]
    });
    alert.present();
  }

  preencherPesquisa() {
    let loading = this.loadingCtrl.create({
      content: 'Finalizando Pesquisa...'
    });
    loading.present();

    this.pesquisaCollection.add({
      'nome': this.dados.nome,
      'sobrenome': this.dados.sobrenome,
      'sexo': this.dados.sexo,
      'idade': this.dados.idade,
      'profissao': this.dados.profissao,
      'respostas': this.respostas,
      'ajuda': this.consideracoes.ajuda,
      'tempo': this.consideracoes.tempo,
      'score': this.score
    }).then(() => {
      loading.dismiss();
      this.presentAlert('Fim do Questionário', 'Agradecemos pela sua participação');
    }).catch((err) => {
      console.log(err);
      loading.dismiss();
      this.presentAlert('Erro', 'Erro no envio do questionario');
    });
  }

  finalizar() {
    this.preencherPesquisa();
  }
}
