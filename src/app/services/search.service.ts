import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SearchResult, Search, SearchType } from '../models/search.model';
import { Alumna } from '../models/alumna/alumna';

@Injectable()
export class SearchService {

  url = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getAlumni(searchTerms: Search) {
    return this.httpClient.get<Alumna[]>(`${this.url}/alumni?q=2012`);
  }
}
