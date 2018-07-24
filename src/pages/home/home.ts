import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {

  }

  ionViewDidLoad() {

  }

  goTab() {
    this.navCtrl.push(TabsPage);
  }
}
