import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { SurveyPage } from './survey';

@NgModule({
  declarations: [
    SurveyPage,
  ],
  imports: [
    IonicPageModule.forChild(SurveyPage),
  ],
})
export class SurveyPageModule {}
