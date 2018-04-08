import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InstrucoesPageModule } from '../pages/instrucoes/instrucoes.module';
import { QuestionarioPageModule } from '../pages/questionario/questionario.module';
import { DadosPageModule } from '../pages/dados/dados.module';
import { TermosPageModule } from '../pages/termos/termos.module';
import { FinalPageModule } from '../pages/final/final.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { credentials } from '../config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    AngularFireModule.initializeApp(credentials.firebase),
    AngularFirestoreModule,
    BrowserModule,
    InstrucoesPageModule,
    QuestionarioPageModule,
    TermosPageModule,
    DadosPageModule,
    SobrePageModule,
    FinalPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
