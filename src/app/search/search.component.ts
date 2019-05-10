import { Component, OnInit } from '@angular/core';

import { Alumna } from '../models/alumna/alumna';
import { PersonalInfo } from '../models/alumna/personalDetails/personalInfo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  alumna1: Alumna = new Alumna();
  alumna2: Alumna = new Alumna();
  alumna3: Alumna = new Alumna();

  seatchResults: Alumna[] = [];
  constructor() { }

  ngOnInit() {
    const personalInfo: PersonalInfo = new PersonalInfo();
    personalInfo.name = 'Margaret';
    personalInfo.lastNameAsMesorahStudent = 'Thatcher';
    this.alumna1.personalInfo = personalInfo;
    this.alumna2.personalInfo = personalInfo;
    this.alumna3.personalInfo = personalInfo;
    this.seatchResults.push(this.alumna1, this.alumna2, this.alumna3);
  }
}
