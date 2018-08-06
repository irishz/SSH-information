import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { DataPage } from './data';

@NgModule({
  declarations: [
    DataPage,
  ],
  imports: [
    IonicPageModule.forChild(DataPage),
  ],
})
export class DataPageModule {}
