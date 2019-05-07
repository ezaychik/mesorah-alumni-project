import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.less']
})
export class BroadcastComponent implements OnInit {
  allGraduatingYears: number[] = [2000, 2001, 2002, 2003, 2004, 2005];
  allLocations: string[] = ['New York, NY', 'Jerusalem, IL', 'Dallas, TX'];
  selectedLocations: number[] = [];
  selectedYears: number[] = [];
  name = 'Amelia Badelia';
  constructor() { }

  ngOnInit() {

  }

  onClickYear(event: any, year: number) {
    event.target.checked ? this.selectedYears.push(year) :
      this.selectedYears.splice(this.selectedYears.indexOf(year), 1);
  }
  onClickLocation(event: any, location: number) {
    event.target.checked ? this.selectedLocations.push(location) :
      this.selectedLocations.splice(this.selectedLocations.indexOf(location), 1);
  }
}
