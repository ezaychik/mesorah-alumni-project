import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Alumna } from '../models/alumna/alumna';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  seatchResults: Alumna[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }
  onSearch() {
    // call some method
  }

}
