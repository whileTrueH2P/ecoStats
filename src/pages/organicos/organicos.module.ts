import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganicosPage } from './organicos';

@NgModule({
  declarations: [
    OrganicosPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganicosPage),
  ],
})
export class OrganicosPageModule {}
