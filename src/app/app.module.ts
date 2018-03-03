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

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    InstrucoesPageModule,
    QuestionarioPageModule,
    TermosPageModule,
    DadosPageModule,
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
