import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../models/item';
import { DataService } from '../../services/dataservice';
// import {Subscription} from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  retrievedData: Item[] = [];
  isFinished: boolean;
  message:Item;

  constructor(private httpClient: HttpClient, private data: DataService) { }

  ngOnInit() {
    let self = this;
    setTimeout(() => {
    self.httpClient.get<Item[]>("assets/mock-data.json").subscribe(a => {
      self.retrievedData = a;
      console.log('ITEMS:', a )
      this.isFinished = true;
      // this.data.currentMessage.subscribe(message=>this.message=message);
    });
    }, 5);
  }

  // updateItem(item){
  //   console.log(item);
  //   data:{
  //     id:item.id,
  //     first_name:item.first_name,
  //     last_name:item.last_name,
  //     gender: item.gender,
  //     color: item.color,
  //     email: item.email
  //   }
  // }

}