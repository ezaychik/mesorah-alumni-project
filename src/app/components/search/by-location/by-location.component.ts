import { Component, OnInit, ViewChild } from '@angular/core';
import { Search, SearchType } from 'src/app/models/search.model';
import { NgForm } from '@angular/forms';

import { AlumnaLocation } from 'src/app/models/location.model';
import { CommonDataService } from 'src/app/services/common-data.service';
import * as states from '../../../../assets/usStates.json';

@Component({
  selector: 'app-by-location',
  templateUrl: './by-location.component.html',
  styleUrls: ['./by-location.component.less']
})
export class ByLocationComponent implements OnInit {
  searchTerms: Search = new Search(SearchType.Location, { city: '', state: '', country: '' });
  states = states;
  allLocations: AlumnaLocation[];
  @ViewChild('searchForm') searchForm: NgForm;
  constructor(private commonDataService: CommonDataService) { }

  ngOnInit() {
    this.allLocations = this.commonDataService.getAllLocations();
  }
}
