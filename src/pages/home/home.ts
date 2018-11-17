import { Component, NgModule, ErrorHandler } from '@angular/core';
import { NavController, ToastController, IonicErrorHandler } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { EnergiaPage } from '../energia/energia';
import { AguaPage } from '../agua/agua';
import { AtmosfericosPage } from '../atmosfericos/atmosfericos';
import { EnergiaSolarPage } from '../energia-solar/energia-solar';
import { EstadisticasPage } from '../estadisticas/estadisticas';
import { GasPage } from '../gas/gas';
import { OrganicosPage } from '../organicos/organicos';
import { QuimicosPage } from '../quimicos/quimicos';
//import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth,
    private toast: ToastController,
    public navCtrl: NavController
    //private db: AngularFireDatabase
    ) {

  }
  ionViewWillLoad() {
    this.afAuth.authState.subscribe(
      data => {
        if (data && data.email && data.uid) {
          this.toast.create({
            message: `Bienvenido a EcoStats, ${data.email}`,
            duration: 3000
          }).present();
        } else {
          this.toast.create({
            message: `Fallo en la autentificación`,
            duration: 3000
          }).present();
        }
      });
  }


  agua(){
    this.navCtrl.push(AguaPage);
  }
  atmosfericos(){
    this.navCtrl.push(AtmosfericosPage);
  }
  energia(){
  this.navCtrl.push(EnergiaPage);
}
energiaSolar(){
  this.navCtrl.push(EnergiaSolarPage);
}
estadisticas(){
  this.navCtrl.push(EstadisticasPage);
}
gas(){
  this.navCtrl.push(GasPage);
}
organicos(){
  this.navCtrl.push(OrganicosPage);
}
quimicos(){
  this.navCtrl.push(QuimicosPage);
}
}