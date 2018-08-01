import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SingUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sing-up',
  templateUrl: 'sing-up.html',
})
export class SingUpPage {
  email : string = "cursoIonic@gmail.com"; 
  password : string;
  //inyeccion de dependencias en ionic//
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  private angularFire : AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingUpPage');
  }
  createAccount(){
    this.angularFire.auth.createUserWithEmailAndPassword(this.email,this.password);
  }

}
