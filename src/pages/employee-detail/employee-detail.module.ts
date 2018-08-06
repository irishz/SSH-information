import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { EmployeeDetailPage } from './employee-detail';

@NgModule({
  declarations: [
    EmployeeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeDetailPage),
  ],
})
export class EmployeeDetailPageModule {}
