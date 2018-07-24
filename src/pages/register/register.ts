import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    public alertCtrl: AlertController) {
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  async register(user: User) {
    await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(data => {
        this.alert('Registered!');
      })
      .catch(error => {
        this.alert(error.message);
      })
  }

}