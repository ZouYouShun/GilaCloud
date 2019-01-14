import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslationWidth } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CoffeeOrderingService {

  url = '/api/coffee/orders';

  constructor(
    private _http: HttpClient
  ) { }

  list() {
    return this._http.get(`${this.url}`);
  }

  get(id: string) {
    return this._http.get(`${this.url}/${id}`);
  }

  add(data) {
    return this._http.post(`${this.url}`, {
      ...data
    });
  }

  update(id, data) {
    return this._http.patch(`${this.url}/${id}`, {
      ...data
    });
  }

  delete(id) {
    return this._http.delete(`${this.url}/${id}`);
  }
}
