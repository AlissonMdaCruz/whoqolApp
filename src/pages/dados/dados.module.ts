import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DadosPage } from './dados';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DadosPage,
  ],
  imports: [
    FormsModule,
    IonicPageModule.forChild(DadosPage)
  ],
})
export class DadosPageModule {}
