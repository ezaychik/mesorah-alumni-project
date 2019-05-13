import { Component, OnInit } from '@angular/core';
import { Search, SearchTerms } from 'src/app/models/search.model';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styleUrls: ['./by-name.component.less']
})
export class ByNameComponent implements OnInit {
  searchTerms: Search = new Search(SearchTerms.Name, { firstName: '', lastName: '' });
  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }
  onSearch() {
    this.searchService.getAlumni(this.searchTerms);
  }
}
