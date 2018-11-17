import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnergiaSolarPage } from './energia-solar';

@NgModule({
  declarations: [
    EnergiaSolarPage,
  ],
  imports: [
    IonicPageModule.forChild(EnergiaSolarPage),
  ],
})
export class EnergiaSolarPageModule {}
