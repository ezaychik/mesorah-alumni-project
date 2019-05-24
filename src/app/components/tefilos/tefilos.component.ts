import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { TefilaRequest } from '../../models/tefilaRequest';
import { Alumna } from '../../models/alumna/alumna';
import { AlumnaService } from 'src/app/services/alumna.service';
import { TefilosService } from 'src/app/services/tefilos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tefilos',
  templateUrl: './tefilos.component.html',
  styleUrls: ['./tefilos.component.less']
})
export class TefilosComponent implements OnInit, OnDestroy {
  currentAlumna: Alumna;
  requestsForDisplay: TefilaRequest[];
  showOnlyMyRequests = false;
  typeOfRequestsToViewOnClick = 'My';
  tefilosChangedSubscription: Subscription;

  constructor(private router: Router, private alumnaService: AlumnaService, private tefilaService: TefilosService) { }
  ngOnInit() {
    this.currentAlumna = this.alumnaService.getAlumna(5);//this.alumnaService.getIdOfActiveAlumna()
    this.requestsForDisplay = this.tefilaService.getActiveTefilaRequests();
    this.tefilosChangedSubscription = this.tefilaService.tefilosChanged.subscribe(
      (tefilos: TefilaRequest[]) => {
        this.showOnlyMyRequests ? this.requestsForDisplay = this.filterMyTefilaRequests(tefilos) : this.requestsForDisplay = tefilos;
      }
    );
  }
  ngOnDestroy(): void {
    this.tefilosChangedSubscription.unsubscribe();
  }
  onChangeViewOfRequests() {
    this.showOnlyMyRequests = !this.showOnlyMyRequests;
    if (this.showOnlyMyRequests) {
      this.requestsForDisplay = this.filterMyTefilaRequests(this.tefilaService.activeTefilaRequests);
      this.typeOfRequestsToViewOnClick = 'All';
    } else {
      this.requestsForDisplay = this.tefilaService.activeTefilaRequests.slice();
      this.typeOfRequestsToViewOnClick = 'My';
    }
  }
  onCancelRequest(request: TefilaRequest) {
    this.tefilaService.cancelRequest(request);
  }
  onChangeTefilaRequestPreference(event: any) {
    this.alumnaService.updateTefilaRequestPreference(event.target.checked);
  }
  onAddRequest() {
    this.router.navigate(['broadcast'], {
      state: {
        from: 'tefilos'
      }
    });
  }
  filterMyTefilaRequests(tefilos: TefilaRequest[]) {
    return tefilos.filter((tefila) => tefila.requesterId === this.currentAlumna.id);
  }
}
