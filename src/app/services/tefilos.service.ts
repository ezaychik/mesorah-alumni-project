import { Injectable } from '@angular/core';
import { TefilaRequest } from '../models/tefilaRequest';
import { Subject } from 'rxjs';

@Injectable()
export class TefilosService {
  activeTefilaRequests: TefilaRequest[] = [
    new TefilaRequest('Today', 'Mo ben Shmo', 'Jane Eyre', 'Feeling bad', 1),
    new TefilaRequest('Tomorrow', 'Go ben Shmo', 'Amelia Earhart', 'Feeling bad', 2),
    new TefilaRequest('Yesterday', 'Lo ben Shmo', 'Amelia Earhart', 'Feeling bad', 2),
    new TefilaRequest('Thursday', 'Ma bas Shma', 'Shprintza Feingoldbergerstein', 'Feeling bad', 5),
    new TefilaRequest('Friday', 'La bas Shma', 'Shprintza Feingoldbergerstein', 'Feeling bad', 5)
  ];
  tefilosChanged = new Subject<TefilaRequest[]>();
  constructor() { }

  getActiveTefilaRequests() {
    return this.activeTefilaRequests.slice();
  }

  addRequest(tefila: TefilaRequest) {
    this.activeTefilaRequests.push(tefila);
    this.onTefilosChanged();
  }

  cancelRequest(request: TefilaRequest) {
    this.activeTefilaRequests.splice(this.activeTefilaRequests.findIndex(
      (tefilaRequest) => tefilaRequest === request), 1);
    this.onTefilosChanged();
  }
  onTefilosChanged() {
    this.tefilosChanged.next(this.activeTefilaRequests.slice());
  }
}
