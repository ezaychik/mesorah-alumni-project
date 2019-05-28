import { Injectable } from '@angular/core';

import { Broadcast } from '../models/broadcast.model';
import { CommonDataService } from './common-data.service';
import { AlumnaLocation } from '../models/location.model';
import { AlumnaService } from './alumna.service';

@Injectable()
export class BroadcastService {
  allGraduatingYears: number[];
  allLocations: AlumnaLocation[];
  constructor(private commonDataService: CommonDataService, private alumnaService: AlumnaService) {
    this.allGraduatingYears = this.commonDataService.getAllGraduatingYears();
    this.allLocations = this.commonDataService.getAllLocations();
  }

  broadcastMessage(broadcast: Broadcast) {
    //call some api, and return result;
    broadcast.broadcasterId = this.alumnaService.getIdOfActiveAlumna();
    this.extractSelectedRecipientGroups(broadcast);
    console.log(broadcast);
    return 'Message successfully sent';
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
