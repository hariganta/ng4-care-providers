import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private states: String[] = [];
  constructor() { }

  ngOnInit() {
    this.states = [
      'Alaska',
      'Alabama',
      'Indiana',
      'Illinois',
      'Ohio',
      'New York'
    ];
  }
}
