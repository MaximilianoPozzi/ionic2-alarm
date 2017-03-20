import { Component } from '@angular/core';


//import { Platform } from 'ionic-angular';
//import { NativeAudio } from 'ionic-native';
import {Observable} from "rxjs";

import * as moment from 'moment';

@Component({
  selector: 'page-alarm',
  templateUrl: 'alarm.html'
})
export class AlarmPage {

  private activatedAlarms = [];
  private alarms=[];
  private date;
  private newAlarm;
  private subscription;

  constructor() {

    //this.platform.ready().then((readySource) => {
    //  NativeAudio.preloadComplex('alarmAudio', '../../assets/alarm-clock.mp3', 1, 1, 0).then(() => console.log('Audio succesfully loaded'));
    //});

    let source = Observable.interval(150);

    this.subscription = source.subscribe((x)=>{
      this.date = moment();

      if(this.date.seconds() === 0 || this.date.seconds() === 1){
        for(let i = 0; i < this.alarms.length; i++){
          if(moment(this.alarms[i].time).isSame(this.date, 'minutes') && this.alarms[i].set){
            this.activatedAlarms[i] = 'danger';
          }
        }
      }

      for(let i = 0; i < this.alarms.length; i++){
        if (!this.alarms[i].set){
          this.activatedAlarms[i] = '';
        }
      }

    });
  }

  removeAlarm(index){
    this.alarms.splice(index,1);
    this.activatedAlarms.splice(index, 1);
  }

  setAlarm(){
    let hours = Number(this.newAlarm.substr(0,2));
    let minutes = Number(this.newAlarm.substr(3,5));

    let newDay= moment([this.date.year(), this.date.month(), this.date.date(), hours, minutes, 0, 0]);

    if(moment(newDay).isSameOrBefore(this.date, 'seconds')){
      newDay.add(1,'d');
    }

    this.alarms.push({
      time: newDay,
      set: true
    });

    this.activatedAlarms.push('');
  }
}

