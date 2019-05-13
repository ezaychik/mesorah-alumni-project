import { Component, OnInit } from '@angular/core';
import { Search, SearchTerms } from 'src/app/models/search.model';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-by-location',
  templateUrl: './by-location.component.html',
  styleUrls: ['./by-location.component.less']
})
export class ByLocationComponent implements OnInit {
  searchTerms: Search = new Search(SearchTerms.Location, { city: '', state: '', country: '' });
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }
  onSearch() {
    this.searchService.getAlumni(this.searchTerms);
  }
}
