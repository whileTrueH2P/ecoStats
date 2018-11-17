import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuimicosPage } from './quimicos';

@NgModule({
  declarations: [
    QuimicosPage,
  ],
  imports: [
    IonicPageModule.forChild(QuimicosPage),
  ],
})
export class QuimicosPageModule {}
