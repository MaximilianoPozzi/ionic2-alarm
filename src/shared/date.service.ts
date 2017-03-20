import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import * as moment from 'moment';

@Injectable()
export class DateService {
  public date = moment();

  constructor(){
    let source = Observable.interval(150);

    source.subscribe((x) => {
      this.date = moment();
    });
  }
}
