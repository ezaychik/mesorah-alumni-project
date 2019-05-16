import { Component, OnInit, ViewChild } from '@angular/core';
import { Search, SearchType } from 'src/app/models/search.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-by-location',
  templateUrl: './by-location.component.html',
  styleUrls: ['./by-location.component.less']
})
export class ByLocationComponent implements OnInit {
  searchTerms: Search = new Search(SearchType.Location, { city: '', state: '', country: '' });
  @ViewChild('searchForm') searchForm: NgForm;
  constructor() { }

  ngOnInit() {
  }

}
