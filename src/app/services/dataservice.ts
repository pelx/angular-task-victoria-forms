import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Item } from './../models/item';
import 'rxjs/add/operator/toPromise';


// private baseURL: string;  
//     private itemDetails = new BehaviorSubject(null);

// @Injectable()
// export class DataService {

//   _item: any;

//   constructor(private http: Httpclient) {
//     this.url = "assets/mock-data.json";
//   }

//   getItem(id: number) {
//     return this._item.toPromise;
//   }

//   setItem(item: Item) {
//     //
//   }
//}