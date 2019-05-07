import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TefilaRequest } from '../models/tefilaRequest';
import { Alumna } from '../models/alumna/alumna';
import { PersonalInfo } from '../models/alumna/personalDetails/personalInfo';

@Component({
  selector: 'app-tefilos',
  templateUrl: './tefilos.component.html',
  styleUrls: ['./tefilos.component.less']
})
export class TefilosComponent implements OnInit {
  currentAlumna: Alumna = new Alumna();
  requestsForDisplay: TefilaRequest[];
  tefilaRequestsMessage: string;
  showOnlyMyRequests = false;
  typeOfRequestsToViewOnClick = 'My';
  activeTefilaRequests: TefilaRequest[] = [
    new TefilaRequest('Today', 'Mo ben Shmo', 'Jane Eyre', 'Feeling bad'),
    new TefilaRequest('Tomorrow', 'Go ben Shmo', 'Amelia Earhart', 'Feeling bad'),
    new TefilaRequest('Yesterday', 'Lo ben Shmo', 'Amelia Earhart', 'Feeling bad')];

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentAlumna.personalInfo = new PersonalInfo();
    this.currentAlumna.personalInfo.name = 'Jane';
    this.currentAlumna.personalInfo.lastNameAsMesorahStudent = 'Eyre';
    this.currentAlumna.isSignedUpForTefilaRequests = true;
    this.requestsForDisplay = this.activeTefilaRequests.slice();
  }

  onChangeViewOfRequests() {
    this.showOnlyMyRequests = !this.showOnlyMyRequests;
    if (this.showOnlyMyRequests) {
      this.requestsForDisplay = this.activeTefilaRequests.filter((tefila) =>
        tefila.requester === `${this.currentAlumna.personalInfo.name} ${this.currentAlumna.personalInfo.lastNameAsMesorahStudent}`
      );
      this.typeOfRequestsToViewOnClick = 'All';
    } else {
      this.requestsForDisplay = this.activeTefilaRequests.slice();
      this.typeOfRequestsToViewOnClick = 'My';
    }
  }
  onCancelRequest(request: TefilaRequest) {
    this.activeTefilaRequests.splice(this.activeTefilaRequests.findIndex((tefilaRequest) => tefilaRequest.name === request.name), 1);
    this.requestsForDisplay = this.activeTefilaRequests.slice();
  }
  onChangeTefilaRequestPreference() {
    this.currentAlumna.isSignedUpForTefilaRequests = !this.currentAlumna.isSignedUpForTefilaRequests;
  }
  onAddRequest() {
    this.router.navigate(['broadcast'], {
      state: {
        from: 'tefilos'
      }
    });
  }

}
