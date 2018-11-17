import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-energia',
  templateUrl: 'energia.html',
})
export class EnergiaPage {
  private lista: AngularFireList<any>;
  constructor(private db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.lista = this.db.list("data/energia");
  console.log("Dffdsdf " + this.lista);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnergiaPage');
  }

  
}
