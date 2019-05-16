import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchType, Search } from 'src/app/models/search.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-by-occupation',
  templateUrl: './by-occupation.component.html',
  styleUrls: ['./by-occupation.component.less']
})
export class ByOccupationComponent implements OnInit {
  searchTerms: Search = new Search(SearchType.Occupation, { occupation: '' });
  @ViewChild('searchForm') searchForm: NgForm;
  constructor() { }

  ngOnInit() {
  }
}
