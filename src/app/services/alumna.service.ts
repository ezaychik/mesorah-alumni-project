import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Alumna } from '../models/alumna/alumna';

@Injectable()
export class AlumnaService {
  url = 'http://localhost:3000';
  private activeAlumna: Alumna;
  constructor(private httpClient: HttpClient) { }

  getAlumna(id: number): Observable<Alumna> {
    // call some APi
    return this.httpClient.get<Alumna>(`${this.url}/alumni/${id}`);
  }
  getActiveAlumna() {
    return this.activeAlumna;
  }
  getIdOfActiveAlumna() {
    return this.activeAlumna.id;
  }
  setActiveAlumna(id: number) {
    this.getAlumna(id).subscribe(
      (alumna) => this.activeAlumna = alumna
    );
  }
  updateAlumna(updatedAluma: Alumna) {
    return this.httpClient.put(`${this.url}/alumni/${this.activeAlumna.id}`, updatedAluma);
  }
  updateTefilaRequestPreference(value: boolean) {
    // call some API, with value, and id as param

  }
}
