import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-final',
  templateUrl: 'final.html',
})
export class FinalPage {

  respostas: any[];
  info: any = {};
  consideracoes: any = {}

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {

    this.respostas = this.navParams.get('resp');
    this.info = this.navParams.get('info');
    console.log(this.info, this.respostas);
  }

  presentAlert() {
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

  finalizar(){
    console.log(this.consideracoes);
    this.presentAlert();
  }
}
