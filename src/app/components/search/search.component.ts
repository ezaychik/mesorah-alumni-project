import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SearchResult } from 'src/app/models/search.model';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchPerformedSubscription: Subscription;
  searchResults: SearchResult[] = [];
  constructor(private searchService: SearchService, private router: Router) { }

  ngOnDestroy(): void {
    this.searchPerformedSubscription.unsubscribe();
  }
  ngOnInit() {
    this.searchPerformedSubscription = this.searchService.searchPerformed.subscribe(
      (searchResults: SearchResult[]) => {
        this.searchResults = searchResults;
      }
    );
    this.router.events.subscribe(() => {
      this.searchResults = [];
    });
  }
}
