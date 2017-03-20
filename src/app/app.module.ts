import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { ChronometerPage } from '../pages/chronometer/chronometer';
import { ClockPage } from '../pages/clock/clock';
import { TimerPage } from '../pages/timer/timer';
import { AlarmPage } from '../pages/alarm/alarm';
import { TabsPage } from '../pages/tabs/tabs';
@NgModule({
  declarations: [
    MyApp,
    ChronometerPage,
    ClockPage,
    TimerPage,
    AlarmPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChronometerPage,
    ClockPage,
    TimerPage,
    AlarmPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
