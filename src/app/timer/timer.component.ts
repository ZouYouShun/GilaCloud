import { Component, OnInit } from '@angular/core';
import { DateHandler } from './time-count-down/date.handler';
import { tapLog } from '../shared/tapLog';
import { interval, Subject, BehaviorSubject, merge } from 'rxjs';
import { switchMap, takeUntil, startWith, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  doStop$ = new Subject();
  doStart$ = new Subject();
  doParse$ = new Subject();

  saveTime = 0;
  nextTime = 0;

  nowTime$ = this.doStart$.pipe(
    switchMap(() => interval(100).pipe(
      map(x => x + 1 + this.nextTime),
      startWith(this.nextTime),
      tap(time => this.saveTime = time),
      takeUntil(
        merge(
          this.doStop$,
          this.doParse$.pipe(
            tap(() => {
              this.nextTime = this.saveTime;
            })
          )
        )
      )
    )),
  );

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.doStart$.next();
  }

  pause() {
    this.doParse$.next();
  }

  stop() {
    this.doStop$.next();
    this.nextTime = 0;
  }
}
