import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
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

}//this.navCtrl.push(HomePage);
