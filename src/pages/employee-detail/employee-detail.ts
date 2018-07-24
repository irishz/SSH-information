import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EmployeeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employee-detail',
  templateUrl: 'employee-detail.html',
})
export class EmployeeDetailPage {

  ids: any;
  name: any;
  position: any;
  department: any;
  startdate: any;
  image: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
    this.ids = this.navParams.get('id');
    this.name = this.navParams.get('name');
    this.position = this.navParams.get('position');
    this.department = this.navParams.get('department');
    this.startdate = this.navParams.get('startdate');
    this.image = this.navParams.get('image');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeDetailPage');
  }

  closeModal(){
    this.view.dismiss();
  }

}
