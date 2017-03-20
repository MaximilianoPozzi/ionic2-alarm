import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Observable, Subscription} from "rxjs";

import * as moment from 'moment';

@Component({
  selector: 'page-chronometer',
  templateUrl: 'chronometer.html'
})
export class ChronometerPage {
  private date;
  private timeElapsed = 0;
  private showableTimeElapsed: string;
  private started: boolean = false;
  private source;
  private time = 0;
  private startSubscription: Subscription;
  private subscription: Subscription;


  constructor(public navCtrl: NavController) {

    this.source = Observable.interval(10);

    this.subscription = this.source.subscribe((x)=> {
      this.date = moment();
    });
  }

  padThreeDigits(d){
    if(d<10){
      return '00' + d.toString();
    } else if(d<100){
      return '0' + d.toString();
    } else {
      return d.toString();
    }
  }

  padTwoDigits(d){
    return (d<10) ? '0'+ d.toString() : d.toString();
  }

  pauseCount(){
    this.startSubscription.unsubscribe();
    this.started = false;
    this.timeElapsed += this.time;
    this.time = 0;
  }

  startCount(){
    if(!this.started){
      let startTime = moment();
      this.startSubscription = this.source.subscribe((x) => {
        this.time = moment().diff(startTime);
        let rawShowableTimeElapsed = this.timeElapsed + this.time;
        let miliseconds = rawShowableTimeElapsed % 1000;
        let totalSeconds = (rawShowableTimeElapsed - miliseconds)/1000;
        let seconds = totalSeconds % 60;
        let totalMinutes = (totalSeconds - seconds)/60;
        let minutes = totalMinutes % 60;
        let totalHours = (totalMinutes - minutes)/60;

        if(totalHours === 0){
          this.showableTimeElapsed = this.padTwoDigits(minutes) + ':' + this.padTwoDigits(seconds) + ':' + this.padThreeDigits(miliseconds);
        } else {
          this.showableTimeElapsed = totalHours+ ':' + this.padTwoDigits(minutes) + ':' + this.padTwoDigits(seconds) + ':' + this.padThreeDigits(miliseconds);
        }
      });
      this.started = true;
    }
  }

  stopCount(){
    this.timeElapsed = 0;
    this.showableTimeElapsed = '00:00:000';
  }

}
