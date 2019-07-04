import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { SearchResult, Search } from 'src/app/models/search.model';
import { SearchService } from 'src/app/services/search.service';
import { Alumna } from 'src/app/models/alumna/alumna';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  searchResults: Alumna[] = [];
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
      await this.searchService.getAlumni(this.searchTerms).subscribe(
        (results) => {
          if (results.length < 1) {
            this.noResultsReturned = true;
          } else {
            this.searchResults = results;
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
}
