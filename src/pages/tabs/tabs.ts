import { Component } from '@angular/core';

import { EmployeePage } from '../employee/employee';
import { InformationPage } from '../information/information';
import { SurveyPage } from '../survey/survey';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InformationPage;
  tab2Root = EmployeePage;
  tab3Root = SurveyPage;

  constructor() {

  }
}
