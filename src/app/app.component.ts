import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  secretQuestion = '';
  genders = [
    { 
      value: 1,
      title: 'Male',
    }, 
    {
      value: 2,
      title: 'Female',
    },
    {
      value: 3,
      title: 'Undisclosed',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  suggestUsername() {
    const userName = 'Supername';
    this.form.setValue({
        "userData": {
            "user-name": "Afolabi Opakunle",
            "email": "opakunleafolabi@gmail.com",
        },
        "secret": "pet",
        "secretQuestion": "Software engineer now",
        "gender": 1,
    })
  }

  onSubmit() {
    console.log(this.form.value);
  }

}