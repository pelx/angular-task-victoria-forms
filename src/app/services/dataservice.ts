import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from './../models/item';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataService {

  _item: any;

  constructor(private item: object) {
    this._item = item;
  }

  getItem(id: number) {
    return this._item.toPromise;
  }

  setItem(item: Item) {
    //
  }
}