import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { InformationPage } from './information';

@NgModule({
  declarations: [
    InformationPage,
  ],
  imports: [
    IonicPageModule.forChild(InformationPage),
  ],
})
export class InformationPageModule {}
