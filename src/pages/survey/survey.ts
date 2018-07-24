import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
})
export class SurveyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private db: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyPage');
  }

  submit(newContent: string) {
    let alert = this.alertCtrl.create({
      title: 'Submit Successful!',
      subTitle: 'Thank you for completing our survey.',
      buttons: ['OK']
    });
    alert.present();

      // Change property database
    const itemsRef = this.db.list('survey');
    itemsRef.push({
      name: newContent,
     });
  }

}
