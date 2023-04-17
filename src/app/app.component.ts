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
  constructor() { }

  ngOnInit() {
  }

  suggestUsername() {
    const userName = 'Supername';
  }

  onSubmit() {
    console.log(this.form);
  }

}