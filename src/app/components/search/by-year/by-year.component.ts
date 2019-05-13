import { Component, OnInit } from '@angular/core';
import { Search, SearchTerms } from 'src/app/models/search.model';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-by-year',
  templateUrl: './by-year.component.html',
  styleUrls: ['./by-year.component.less']
})
export class ByYearComponent implements OnInit {
  searchTerms: Search = new Search(SearchTerms.YearGraduated, { yearGraduated: 0 });
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }
  onSearch() {
    this.searchService.getAlumni(this.searchTerms);
  }
}
