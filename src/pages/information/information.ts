import { OutLinkPage } from '../out-link/out-link';
import { InLinkPage } from '../in-link/in-link';
import { MottoPage } from '../motto/motto';
import { HistoryPage } from '../history/history';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular/umd';

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

  goHistory(){
    const toast = this.toastCtrl.create({
      message: 'History page!',
      duration: 2000
    });
    toast.present();
    this.navCtrl.push(HistoryPage);
  }

  goMotto(){
    const toast = this.toastCtrl.create({
      message: 'Motto page!',
      duration: 2000
    });
    toast.present();
    this.navCtrl.push(MottoPage);
  }

  inlink(){
    this.navCtrl.push(InLinkPage);
  }

  outlink(){
    this.navCtrl.push(OutLinkPage);
  }

}
