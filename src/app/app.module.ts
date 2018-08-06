import { config } from './app.firebase.config';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular/umd';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
// import { LoginPage } from '../pages/login/login';
// import { RegisterPage } from '../pages/register/register';
// import { EmployeePage } from '../pages/employee/employee';
// import { InformationPage } from '../pages/information/information';
// import { SurveyPage } from '../pages/survey/survey';
// import { EmployeeDetailPage } from '../pages/employee-detail/employee-detail';
// import { HistoryPage } from '../pages/history/history';
// import { MottoPage } from '../pages/motto/motto';
// import { OutLinkPage } from '../pages/out-link/out-link';
// import { InLinkPage } from '../pages/in-link/in-link';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    // LoginPage,
    // RegisterPage,
    // EmployeePage,
    // InformationPage,
    // SurveyPage,
    // EmployeeDetailPage,
    // HistoryPage,
    // MottoPage,
    // OutLinkPage,
    // InLinkPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    // LoginPage,
    // RegisterPage,
    // EmployeePage,
    // InformationPage,
    // SurveyPage,
    // EmployeeDetailPage,
    // HistoryPage,
    // MottoPage,
    // OutLinkPage,
    // InLinkPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}