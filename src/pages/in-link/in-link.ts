import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';

/**
 * Generated class for the InLinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-in-link',
  templateUrl: 'in-link.html',
})
export class InLinkPage {
  maLinks: Observable<any[]>;
  itLinks: Observable<any[]>;
  smcLinks: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db:AngularFireDatabase) {

    this.maLinks = this.db.list('ma-link').valueChanges();
    this.itLinks = this.db.list('it-link').valueChanges();
    this.smcLinks = this.db.list('smc-link').valueChanges();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InLinkPage');
  }

}
