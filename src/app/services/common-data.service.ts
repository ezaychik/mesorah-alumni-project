import { Injectable } from '@angular/core';
import { Location } from '../models/location.model';

@Injectable()
export class CommonDataService {

  private allGraduatingYears: number[];
  private allLocations: Location[];

  constructor() { }

  getAllGraduatingYears() {
    this.allGraduatingYears = [2000, 2001, 2002, 2003, 2004, 2005];
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
