import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HistoryPageModule {}
