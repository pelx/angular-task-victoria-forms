import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Gender } from '../../interfaces/gender';
import { ApiData } from '../../interfaces/apidata';
import { Item } from '../../models/item';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id: number;
  items: Map<Item, number>;
 	dataSource: ApiData;
  form: FormGroup;

  gender: Gender[] = [
    { code: "F", value: "Female" },
    { code: "M", value: "Male" },

  ]
  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute) {
    this.http.get<Item[]>("assets/mock-data.json").subscribe(a => {
      this.dataSource = a as ApiData;
      this.items = this.dataSource.items;
    });

    this.route.paramMap
      .subscribe(params => {
        this.id = +params.get('id')
      });
    console.log('ID:    ', this.id);
    console.log('ITEMs', this.items[this.id]);
    let item = this.items[this.id];
    this.form = fb.group({
      id: [item.id],
      first_name: [item.first_name],
      last_name: [item.last_name],
      gender: [item.gender],
      colour: [item.colour],
      email: [item.email],
    });

  }

  ngOnInit() {

  }
}