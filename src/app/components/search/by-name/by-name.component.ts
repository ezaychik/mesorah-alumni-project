import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Search, SearchType } from 'src/app/models/search.model';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styleUrls: ['./by-name.component.less']
})
export class ByNameComponent implements OnInit {
  searchTerms: Search = new Search(SearchType.Name, { firstName: '', lastName: '' });
  @ViewChild('searchForm') searchForm: NgForm;
  constructor() {
  }

  ngOnInit() {
  }

}
