import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { DataDetailPage } from './data-detail';

@NgModule({
  declarations: [
    DataDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DataDetailPage),
  ],
})
export class DataDetailPageModule {}
