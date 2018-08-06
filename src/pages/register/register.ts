import { AngularFireDatabase } from 'angularfire2/database';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  checkRadio = true;

  user = {} as User;
  formgroup: FormGroup;
  email: AbstractControl;
  password: AbstractControl;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    public formbuilder: FormBuilder,
    private db: AngularFireDatabase
  ) {
    

    this.formgroup = this.formbuilder.group({
      email: ['', Validators.compose([Validators.pattern('[A-Za-z0-9._%+-]{3,}@suksawathospital.com'), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });

    this.email = this.formgroup.controls['email'];
    this.password = this.formgroup.controls['password'];

  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    }).present();
    this.navCtrl.push(LoginPage);
  }

  async register(user: User,newName: string) {
    await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(data => {
        this.alert('Registered!');
      })
      .catch(error => {
        this.alert(error.message);
      })

    // const itemsRef = this.db.list('employee');
    // itemsRef.push({
    //   name: newName,
    // });
  }

}