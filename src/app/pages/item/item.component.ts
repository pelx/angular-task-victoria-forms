import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Gender } from '../../interfaces/gender';
import { DataService } from '../../services/dataservice';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  id:number;
  message:string;
  gender: Gender[] = [
    { code: "F", value: "Female" },
    { code: "M", value: "Male" },

  ]
  constructor() { }
  // constructor(private data: DataService) { }

  ngOnInit() {
    // this.data.currentMessage.subscribe(message => this.message = message)
  }

  

  itemForm = new FormGroup({
    id: new FormControl('0'),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    gender: new FormControl(''),
    colour: new FormControl(''),
    email: new FormControl(''),
  })

// newMessage() {
//     this.data.changeMessage("Hello from Sibling");
//     console.log(this.data.changeMessage);
//   }

}