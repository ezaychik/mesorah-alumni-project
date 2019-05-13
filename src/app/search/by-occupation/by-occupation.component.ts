import { Component, OnInit } from '@angular/core';
import { SearchTerms, Search } from 'src/app/models/search';

@Component({
  selector: 'app-by-occupation',
  templateUrl: './by-occupation.component.html',
  styleUrls: ['./by-occupation.component.less']
})
export class ByOccupationComponent implements OnInit {
  searchTerms: Search = new Search(SearchTerms.Occupation, { occupation: '' });
  constructor() { }

  ngOnInit() {
  }
  onSearch() {
    console.log(this.searchTerms);
  }
}
