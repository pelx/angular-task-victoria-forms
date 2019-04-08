import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Gender } from '../../interfaces/gender';
import { Item } from '../../models/item';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id: number;
  items: Item[] = [];
  item;
  form: FormGroup;

  gender: Gender[] = [
    { code: "F", value: "Female" },
    { code: "M", value: "Male" },

  ]
  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute) {
    this.http.get<Item[]>("assets/mock-data.json").subscribe(data => {
      this.items = data;

      // this.item = this.http.get<Item[]>("assets/mock-data.json").pipe(map(item => item.find(item=> item.id === this.id)));
      // console.log('ITEMs', data);

    });

    this.route.paramMap
      .subscribe(params => {
        this.id = +params.get('id')
      });
    console.log('ID:    ', this.id);

    let item = this.items.find(item => item.id === this.id);
    console.log('ITEM', item);

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