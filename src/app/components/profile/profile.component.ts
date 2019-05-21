import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Alumna } from 'src/app/models/alumna/alumna';
import { PersonalInfo } from 'src/app/models/alumna/personalDetails/personalInfo';
import { Address } from 'src/app/models/alumna/personalDetails/address';
import { Family } from 'src/app/models/alumna/family/family';
import { ContactInfo } from 'src/app/models/alumna/personalDetails/contactInfo';
import { Husband } from 'src/app/models/alumna/family/husband';
import { Child, Gender } from 'src/app/models/alumna/family/child';
import { ProfessionalInfo } from 'src/app/models/alumna/personalDetails/professionalInfo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  currentAlumna: Alumna = new Alumna();
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
  profileForm: FormGroup;
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.currentAlumna.id = 4;
    this.personalInfo.name = 'Shprintza';
    this.personalInfo.lastNameAsMesorahStudent = 'Feingoldbergerstein';
    this.personalInfo.yearGraduated = 2011;

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
    this.profession.occupation = 'Mother';
    this.profession.company = 'Family';

    this.currentAlumna.personalInfo = this.personalInfo;
    this.currentAlumna.address = this.address;
    this.currentAlumna.family = this.family;
    this.currentAlumna.contact = this.contact;
    this.currentAlumna.profession = this.profession;
  }

  ngOnInit() {
    this.initForm();
    this.checkIfFormIsEditable();
  }
  initForm() {

    const childrenArray = this.fb.array([]);
    if (this.currentAlumna.family.children.length > 0) {
      this.initChildrenArray(childrenArray);
    }
    this.profileForm = this.fb.group({
      personal: this.fb.group({
        firstName: this.fb.control(this.currentAlumna.personalInfo.name, Validators.required),
        lastNameAsStudent: this.fb.control(this.currentAlumna.personalInfo.lastNameAsMesorahStudent, Validators.required),
        yearGraduated: this.fb.control(this.currentAlumna.personalInfo.yearGraduated, Validators.required)
      }),
      address: this.fb.group({
        address: this.fb.control(this.currentAlumna.address.address),
        city: this.fb.control(this.currentAlumna.address.city),
        state: this.fb.control(this.currentAlumna.address.state),
        country: this.fb.control(this.currentAlumna.address.country),
        postalCode: this.fb.control(this.currentAlumna.address.postCode)
      }),
      contact: this.fb.group({
        email: this.fb.control(this.currentAlumna.contact.email),
        phoneNumber: this.fb.control(this.currentAlumna.contact.phoneNumber)
      }),
      family: this.fb.group({
        isMarried: this.fb.control(this.currentAlumna.family.isMarried),
        husband: this.fb.group({
          firstName: this.fb.control(this.currentAlumna.family.husband.firstName),
          lastName: this.fb.control(this.currentAlumna.family.husband.lastName),
          occupation: this.fb.control(this.currentAlumna.family.husband.occupation)
        }),
        hasChildren: this.fb.control(this.currentAlumna.family.hasChildren),
        children: childrenArray
      }),
      professional: this.fb.group({
        profession: this.fb.control(this.currentAlumna.profession.occupation),
        company: this.fb.control(this.currentAlumna.profession.company)
      })
    });
  }
  checkIfFormIsEditable() {
    if (this.activatedRoute.snapshot.params.id &&
      +this.activatedRoute.snapshot.params.id !== this.currentAlumna.id) {
      this.profileForm.disable();
    }
  }
  initChildrenArray(children: FormArray) {
    for (const child of this.currentAlumna.family.children) {
      children.push(
        this.fb.group({
          name: this.fb.control(child.name),
          birthday: this.fb.control(child.birthday),
          gender: this.fb.control(child.gender)
        })
      );
    }
  }
  onAddChild() {
    (this.profileForm.get('family.children') as FormArray).push(
      this.fb.group({
        name: this.fb.control(null),
        birthday: this.fb.control(null),
        gender: this.fb.control(null)
      })
    );
  }
  onRemoveChild(index: number) {
    (this.profileForm.get('family.children') as FormArray).removeAt(index);
  }
  onSubmit() {
    console.log(this.profileForm.controls);
    console.log(this.currentAlumna.personalInfo);
  }
}
