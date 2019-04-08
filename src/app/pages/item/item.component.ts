import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Gender } from '../../interfaces/gender';
import { DataService } from '../../services/dataservice';
import { Item } from '../../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id: number;
  item: Item;
  form: FormGroup;

  gender: Gender[] = [
    { code: "F", value: "Female" },
    { code: "M", value: "Male" },

  ]
  constructor(private fb: FormBuilder,
    private service: DataService) {
    let item = service.getItem();
    this.form = fb.group({
      id: [item.id],
      first_name: [item.first_name],
      last_name: [item.last_name],
      gender: [item.gender],
      color: [item.color],
      email: [item.email],
    });

  }

  ngOnInit() {
    this.httpClient.get<Item[]>("assets/mock-data.json").subscribe(a => {
      this.retrievedData = data;
      console.log('ITEMS', data )
    });
  }
}