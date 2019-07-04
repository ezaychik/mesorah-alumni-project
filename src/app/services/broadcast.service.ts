import { Injectable } from '@angular/core';

import { Broadcast } from '../models/broadcast.model';
import { CommonDataService } from './common-data.service';
import { AlumnaLocation } from '../models/location.model';
import { TefilaRequest } from '../models/tefilaRequest';
import { TefilosService } from './tefilos.service';

@Injectable()
export class BroadcastService {
  allGraduatingYears: number[];
  allLocations: AlumnaLocation[];
  constructor(private commonDataService: CommonDataService, private tefilosService: TefilosService) {
    this.allGraduatingYears = this.commonDataService.getAllGraduatingYears();
    this.allLocations = this.commonDataService.getAllLocations();
  }

  broadcastMessage(broadcast: Broadcast, alumnaId: number) {
    // call some api, and return result;
    broadcast.broadcasterId = alumnaId;
    this.extractSelectedRecipientGroups(broadcast);
    if (broadcast.subject === 'tefilos') {
      this.addTefilaRequest(broadcast);
    }
    console.log(broadcast);
    return 'Message successfully sent';
  }
  addTefilaRequest(broadcast: Broadcast): any {
    const tefilaRequest: TefilaRequest = new TefilaRequest();
    tefilaRequest.requesterId = broadcast.broadcasterId;
    tefilaRequest.description = broadcast.description;
    tefilaRequest.name = broadcast.nameForDavening;
    tefilaRequest.requester = broadcast.replyTo;
    tefilaRequest.dateOfRequest = Date.now().toString();
    this.tefilosService.addRequest(tefilaRequest);
  }
  extractSelectedRecipientGroups(broadcast: Broadcast) {
    broadcast.recipients.byGraduatingYear = broadcast.recipients.byGraduatingYear
      .map((checked, index) => checked ? this.allGraduatingYears[index] : null)
      .filter(value => value !== null);
    broadcast.recipients.byLocation = broadcast.recipients.byLocation
      .map((checked, index) => checked ? this.allLocations[index] : null)
      .filter(value => value !== null);
  }
}
