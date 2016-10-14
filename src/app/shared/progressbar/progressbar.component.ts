import {Component, OnInit, OnDestroy, Input, OnChanges} from '@angular/core';
import { Observable } from "rxjs/Rx";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html'
})
export class ProgressBarComponent implements OnInit, OnDestroy, OnChanges {
  @Input() duration: number;
  @Input() title: string;

  private Math;
  private percentage: number = 0;

  private timer;
  private subscriber;
  private running: boolean = true;

  constructor() {
    this.Math = Math;
  }

  ngOnInit() {
    this.timer = Observable.timer(100, 100);

    this.setupCounter();
  }

  private setupCounter(){
    var percentageIncremental = (100/(this.duration * 60)) * 0.1; // 0.1 is on every 100 milliseconds

    this.subscriber = this.timer.subscribe(t => {
      if(!this.running) {
        return;
      }

      this.percentage += percentageIncremental;

      if(this.percentage >= 100)
      {
        this.percentage = 100;
        this.subscriber.unsubscribe();
      }
    });
  }

  reset() {
    this.percentage = 0;
    this.running = true;

    if(isNullOrUndefined(this.subscriber))
      return;

    this.subscriber.unsubscribe();
    this.setupCounter();
  }

  pause() {
    this.running = false;
  }

  resume() {
    this.running = true;
  }

  done() {

  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

  ngOnChanges(data): void {
    this.reset();
  }

}
