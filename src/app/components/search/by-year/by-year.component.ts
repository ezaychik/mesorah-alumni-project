import { Component, OnInit } from '@angular/core';
import { Search, SearchTerms } from 'src/app/models/search';

@Component({
  selector: 'app-by-year',
  templateUrl: './by-year.component.html',
  styleUrls: ['./by-year.component.less']
})
export class ByYearComponent implements OnInit {
  searchTerms: Search = new Search(SearchTerms.YearGraduated, { yearGraduated: 0 });
  constructor() { }

  ngOnInit() {
  }
  onSearch() {
    console.log(this.searchTerms);
  }

}
