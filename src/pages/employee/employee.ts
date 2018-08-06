import { EmployeeDetailPage } from '../employee-detail/employee-detail';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular/umd';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html',
})
export class EmployeePage {
  items: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase, public modalCtrl: ModalController) {
    
    this.items = this.db.list('employee').valueChanges();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeePage');
  }

  detail(item: any) {
    const modal = this.modalCtrl.create(EmployeeDetailPage , item);
    modal.present();
  }

}
