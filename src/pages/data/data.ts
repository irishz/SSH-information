import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class DataPage {
  items: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // query
    // this.items = db.list('/data-doctor').valueChanges();
  }

  ionViewDidLoad() {

  }

}
