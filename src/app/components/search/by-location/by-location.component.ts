import { Component, OnInit } from '@angular/core';
import { Search, SearchTerms } from 'src/app/models/search';

@Component({
  selector: 'app-by-location',
  templateUrl: './by-location.component.html',
  styleUrls: ['./by-location.component.less']
})
export class ByLocationComponent implements OnInit {
  searchTerms: Search = new Search(SearchTerms.Location, { city: '', state: '', country: '' });
  constructor() { }

  ngOnInit() {
  }
  onSearch() {
    console.log(this.searchTerms);
  }
}
