import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styleUrls: ['./by-name.component.less']
})
export class ByNameComponent implements OnInit {
  firstName: string;
  lastNameStudent: string;
  lastNameMarried: string;
  constructor() { }

  ngOnInit() {
  }
  onSearch() {

  }
}
