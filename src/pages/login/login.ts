import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from './../../app/models/user'
import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from "./../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User; 

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(mail, password){
    try{
      console.log("****" + mail + "   " + password);
      
    const result = this.afAuth.auth.signInWithEmailAndPassword(mail, password);
   //if (result) {
     this.navCtrl.push(HomePage);
   //}
    
    }
    catch(e){
      console.error(e);
    }
  }

  register(){
    this.navCtrl.push('RegisterPage');
  }
}
