import { Component } from '@angular/core';

import {Observable} from 'rxjs';
import * as moment from 'moment';

/*
  Generated class for the Clock page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-clock',
  templateUrl: 'clock.html'
})
export class ClockPage {

  private date = moment();

  constructor() {

    let source = Observable.interval(150);

    source.subscribe((x) => {
      this.date = moment();
    });
  }


}
