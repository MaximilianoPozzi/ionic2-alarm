import { Component } from '@angular/core';

import { AlarmPage } from '../alarm/alarm';
import { ChronometerPage } from '../chronometer/chronometer';
import { TimerPage } from '../timer/timer';
import {ClockPage} from "../clock/clock";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ClockPage;
  tab2Root: any = AlarmPage;
  tab3Root: any = ChronometerPage;
  tab4Root: any = TimerPage;

  constructor() {

  }
}
