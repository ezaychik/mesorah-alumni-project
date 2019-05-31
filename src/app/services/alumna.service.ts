import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Alumna } from '../models/alumna/alumna';
import { PersonalInfo } from '../models/alumna/personalDetails/personalInfo';
import { Family } from '../models/alumna/family/family';
import { ContactInfo } from '../models/alumna/personalDetails/contactInfo';
import { ProfessionalInfo } from '../models/alumna/personalDetails/professionalInfo';
import { Child, Gender } from '../models/alumna/family/child';
import { Address } from '../models/alumna/personalDetails/address';
import { Husband } from '../models/alumna/family/husband';
import { Observable } from 'rxjs';
@Injectable()
export class AlumnaService {
  private idOfActiveAlumna: number;
  personalInfo: PersonalInfo = new PersonalInfo();
  address: Address = new Address();
  family: Family = new Family();
  contact: ContactInfo = new ContactInfo();
  profession: ProfessionalInfo = new ProfessionalInfo();
  children: Child[] = [
    new Child('Chaim', Gender.Male, new Date(2015, 10, 23)),
    new Child('Hinda', Gender.Female, new Date(2017, 0, 12)),
    new Child('Shmulke Poulke', Gender.Male, new Date(2019, 3, 30))
  ];


  constructor(private httpClient: HttpClient) {
    this.personalInfo.firstName = 'Shprintza';
    this.personalInfo.lastNameAsStudent = 'Feingoldbergerstein';
    this.personalInfo.yearGraduated = 2001;

    this.contact.email = 'shprintzy234@shprintz.sp';
    this.contact.phoneNumber = 3214567890;

    this.address.address = '981 Mitzvah Boulevard';
    this.address.city = 'Los Angeles';
    this.address.state = 'CA';
    this.address.country = 'US';
    this.address.postCode = '99999';

    this.family.isMarried = true;
    this.family.husband = new Husband();
    this.family.husband.firstName = 'Aharon';
    this.family.husband.lastName = 'Silversilverstien';
    this.family.husband.occupation = 'Undertaker';
    this.family.hasChildren = true;
    this.family.children = this.children;
    this.profession.profession = 'Mother';
    this.profession.company = 'Family';

  }

  getAlumna(id: number): Observable<Alumna> {
    // call some APi
    return this.httpClient.get<Alumna>('https://mesorah-alumni-network.firebaseio.com/alumni.json?id=' + id);
    const alumna: Alumna = new Alumna();
    alumna.personal = this.personalInfo;
    alumna.address = this.address;
    alumna.family = this.family;
    alumna.contact = this.contact;
    alumna.professional = this.profession;
    alumna.id = id;
    //return alumna;
  }
  getIdOfActiveAlumna() {
    return this.idOfActiveAlumna;
  }
  setIdOfActiveAlumna(id: number) {
    this.idOfActiveAlumna = id;
  }
  updateAlumna(updatedAluma: Alumna) {
    updatedAluma.id = this.idOfActiveAlumna;
    return this.httpClient.put('https://mesorah-alumni-network.firebaseio.com/alumni.json', updatedAluma);
  }
  updateTefilaRequestPreference(value: boolean) {
    // call some API, with value, and id as param

  }
}
