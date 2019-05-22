import { Injectable } from '@angular/core';
import { SearchResult, Search } from '../models/search.model';

@Injectable()
export class SearchService {
  constructor() { }

  getAlumni(searchTerms: Search) {
    // call some API
    const alumna1: SearchResult = new SearchResult();
    const alumna2: SearchResult = new SearchResult();
    const alumna3: SearchResult = new SearchResult();
    alumna1.firstName = 'Mother';
    alumna1.lastName = 'Theresa';
    alumna1.id = 1;

    alumna2.firstName = 'Margaret';
    alumna2.lastName = 'Thatcher';
    alumna2.id = 2;

    alumna3.lastName = 'Currie';
    alumna3.firstName = 'Marie';
    alumna3.id = 3;

    const searchResults: SearchResult[] = [];
    searchResults.push(alumna1, alumna2, alumna3);
    return searchResults;

  }
}
