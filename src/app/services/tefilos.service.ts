import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TefilaRequest } from '../models/tefilaRequest';

@Injectable()
export class TefilosService {
  activeTefilaRequests: TefilaRequest[] = [];
  tefilosChanged = new Subject<TefilaRequest[]>();
  url = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getActiveTefilaRequests() {
    this.httpClient.get<TefilaRequest[]>(`${this.url}/tefilos`).subscribe(
      async (tefilos) => {
        this.activeTefilaRequests = await tefilos;
        this.onTefilosChanged(tefilos);
      },
      (error) => console.log(error)
    );
  }

  addRequest(tefila: TefilaRequest) {
    this.httpClient.post(`${this.url}/tefilos/`, tefila).subscribe(
      (success) => {
        this.getActiveTefilaRequests();
      },
      (error) => console.log(error)
    );
  }

  cancelRequest(id: number) {
    this.httpClient.delete(`${this.url}/tefilos/${id}`).subscribe(
      async (success) => {
        await this.getActiveTefilaRequests();
      },
      (error) => console.log(error)
    );
  }
  private onTefilosChanged(tefilaRequests: TefilaRequest[]) {
    this.tefilosChanged.next(tefilaRequests);
  }
}
