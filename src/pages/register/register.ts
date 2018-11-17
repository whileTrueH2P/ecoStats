import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private ofAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(mail, password){
    try{
      console.log("****" + mail + "   " + password);
      
    const result = this.ofAuth.auth.createUserWithEmailAndPassword(mail, password);
    console.log(result);
    this.navCtrl.push(HomePage);
    
    }
    catch(e){
      console.error(e);
    }
  }

}
