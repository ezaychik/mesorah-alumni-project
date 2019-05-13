import { Component, OnInit } from '@angular/core';
import { SearchTerms, Search } from 'src/app/models/search.model';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-by-occupation',
  templateUrl: './by-occupation.component.html',
  styleUrls: ['./by-occupation.component.less']
})
export class ByOccupationComponent implements OnInit {
  searchTerms: Search = new Search(SearchTerms.Occupation, { occupation: '' });
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }
  onSearch() {
    this.searchService.getAlumni(this.searchTerms);
  }
}
