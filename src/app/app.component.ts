import { HomePage } from './../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular/umd';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, afAuth: AngularFireAuth, private navCtrl: NavController) {
    var user = afAuth.auth.currentUser;

    platform.ready().then(() => {
      if (user != null){
        console.log(user.displayName)
        this.navCtrl.setRoot(HomePage);
      }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
