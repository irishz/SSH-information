import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { MottoPage } from './motto';

@NgModule({
  declarations: [
    MottoPage,
  ],
  imports: [
    IonicPageModule.forChild(MottoPage),
  ],
})
export class MottoPageModule {}
