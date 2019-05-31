import { Injectable } from '@angular/core';
import { AlumnaLocation } from '../models/location.model';

@Injectable()
export class CommonDataService {

  private allGraduatingYears: number[];
  private allLocations: AlumnaLocation[];

  constructor() { }

  getAllGraduatingYears() {
    this.allGraduatingYears = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
      2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
    return this.allGraduatingYears.slice();
  }
  getAllLocations() {
    this.allLocations = [
      { city: 'Dallas', state: 'TX', country: 'United States' },
      { city: 'New York', state: 'NY', country: 'United States' },
      { city: 'Jerusalem', country: ' Israel' }
    ];
    return this.allLocations.slice();
  }
}
