import { DadosModel } from './../../model/dados.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { HomePage } from '../home/home';
import Pesquisa from '../../model/pesquisa';

@IonicPage()
@Component({
  selector: 'page-final',
  templateUrl: 'final.html',
})
export class FinalPage {

  respostas: any[];
  dados: DadosModel;
  consideracoes: any = {};
  pesquisaCollection: AngularFirestoreCollection<Pesquisa>;
  pesquisa: Observable<Pesquisa[]>;

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
    this.inverter(this.respostas);
  }
  //Inverte as questões 3, 4 e 26
  inverter(arr: Array<number>){
    arr[2] = 6 - arr[2];
    arr[3] = 6 - arr[3];
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
      'tempo': this.consideracoes.tempo
    }).then(()=>{
      loading.dismiss();
      this.presentAlert('Fim do Questionário', 'Agradecemos pela sua participação');
    }).catch((err)=>{
      console.log(err);
      loading.dismiss();
      this.presentAlert('Erro', 'Erro no envio do questionario');
    });
  }

  finalizar() {
    this.preencherPesquisa();
  }
}
