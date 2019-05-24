import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { SearchResult, Search } from 'src/app/models/search.model';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  searchResults: SearchResult[] = [];
  searchTerms: Search;
  searchForm: NgForm;
  noResultsReturned = false;
  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit() {
    this.clearSearchResultsWhenNavigatingAway();
  }
  clearSearchResultsWhenNavigatingAway() {
    this.router.events.subscribe(() => {
      this.searchResults = [];
      this.noResultsReturned = false;
    });
  }
  getSearchTerms(childSearch) {
    this.searchTerms = childSearch.searchTerms;
    this.searchForm = childSearch.searchForm;
  }

  async onSearch() {
    try {
      this.searchResults = await this.searchService.getAlumni(this.searchTerms) as SearchResult[];
      if (this.searchResults.length < 1) {
        this.noResultsReturned = true;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
