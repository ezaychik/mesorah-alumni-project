import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Search, SearchType } from 'src/app/models/search.model';
import { CommonDataService } from 'src/app/services/common-data.service';


@Component({
  selector: 'app-by-year',
  templateUrl: './by-year.component.html',
  styleUrls: ['./by-year.component.less']
})
export class ByYearComponent implements OnInit {
  searchTerms: Search = new Search(SearchType.YearGraduated, { yearGraduated: '' });
  allYears: number[];
  @ViewChild('searchForm') searchForm: NgForm;
  constructor(private commonDataService: CommonDataService) { }

  ngOnInit() {
    this.allYears = this.commonDataService.getAllGraduatingYears();
  }
}
