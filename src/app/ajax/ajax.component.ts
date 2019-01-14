import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tapLog } from '../shared/tapLog';
import { switchMap, map, startWith, tap } from 'rxjs/operators';
import { BehaviorSubject, interval } from 'rxjs';

enum SORT_STATE {
  NONE = 0,
  ASC = 1,
  DESC = -1,
}

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss']
})
export class AjaxComponent implements OnInit {

  set sortState(v) {
    this._nowState.next(v);
  }
  get sortState() {
    return this._nowState.value;
  }

  private _nowState = new BehaviorSubject(SORT_STATE.NONE);

  apiGet$ = interval(10000).pipe(
    startWith(-1),
    tap(() => console.log('get data')),
    switchMap(() => this._http.get('http://opendata2.epa.gov.tw/AQI.json')),
    switchMap((data: any[]) => this._nowState.pipe(
      map(() => {
        return [...data].sort((a, b) => {
          if (a.SiteName < b.SiteName) {
            return -this.sortState;
          }
          if (a.SiteName > b.SiteName) {
            return this.sortState;
          }
          return 0;
        });
      })
    )),
    tapLog()
  );

  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit() {
  }

  sort() {
    switch (this.sortState) {
      case SORT_STATE.NONE:
        this.sortState = SORT_STATE.ASC;
        break;

      case SORT_STATE.ASC:
        this.sortState = SORT_STATE.DESC;
        break;

      case SORT_STATE.DESC:
      default:
        this.sortState = SORT_STATE.NONE;
        break;
    }
  }

}
