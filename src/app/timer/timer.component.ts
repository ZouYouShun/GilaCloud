import { Component, OnInit } from '@angular/core';
import { interval, Subject, merge } from 'rxjs';
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
    switchMap(() => interval(1000).pipe(
      map(x => this.nextTime + (x + 1)),
      startWith(this.nextTime),
      tap(time => this.saveTime = time),
      map((s) => toDate(s)),
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

function toDate(sec_num) {
  const hours: any = Math.floor(sec_num / 3600);
  const minutes: any = Math.floor((sec_num - (hours * 3600)) / 60);
  const seconds: any = sec_num - (hours * 3600) - (minutes * 60);

  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}

export function pad(num, size = 2) {
  let s = num + '';
  while (s.length < size) { s = '0' + s; }
  return s;
}
