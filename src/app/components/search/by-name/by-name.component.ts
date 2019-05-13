import { Component, OnInit } from '@angular/core';
import { Search, SearchTerms } from 'src/app/models/search';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styleUrls: ['./by-name.component.less']
})
export class ByNameComponent implements OnInit {
  searchTerms: Search = new Search(SearchTerms.Name, { firstName: '', lastName: '' });
  constructor() {
  }

  ngOnInit() {
  }
  onSearch() {
    console.log(this.searchTerms);
  }
}
