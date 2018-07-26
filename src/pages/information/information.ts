import { MottoPage } from './../motto/motto';
import { HistoryPage } from './../history/history';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

  goHistory(){
    const toast = this.toastCtrl.create({
      message: 'History page!',
      duration: 3000
    });
    toast.present();
    this.navCtrl.push(HistoryPage);
  }

  goMotto(){
    const toast = this.toastCtrl.create({
      message: 'Motto page!',
      duration: 3000
    });
    toast.present();
    this.navCtrl.push(MottoPage);
  }

}
