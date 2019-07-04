import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Alumna } from 'src/app/models/alumna/alumna';
import { AlumnaService } from 'src/app/services/alumna.service';
import { CommonDataService } from 'src/app/services/common-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  currentAlumna: Alumna;
  profileForm: FormGroup;
  isLoaded = false;
  allGraduatingYears: number[];
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute,
              private alumnaService: AlumnaService, private commonDataService: CommonDataService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(async params => {
      if (!params.get('id')) {
        this.currentAlumna = this.alumnaService.getActiveAlumna();
      } else {
        this.currentAlumna = await this.alumnaService.getAlumna(+params.get('id')).toPromise();
      }
      this.initForm();
      this.checkIfFormIsEditable();
      this.isLoaded = true;
    });
  }
  initForm() {
    this.allGraduatingYears = this.commonDataService.getAllGraduatingYears();
    const childrenArray = this.fb.array([]);
    const initChildrenArray = (children: FormArray) => {
      for (const child of this.currentAlumna.family.children) {
        children.push(
          this.fb.group({
            name: this.fb.control(child.name),
            birthday: this.fb.control(child.birthday),
            gender: this.fb.control(child.gender)
          })
        );
      }
    };
    if (this.currentAlumna.family.children.length > 0) {
      initChildrenArray(childrenArray);
    }
    this.profileForm = this.fb.group({
      personal: this.fb.group({
        firstName: this.fb.control(this.currentAlumna.personal.firstName, Validators.required),
        lastNameAsStudent: this.fb.control(this.currentAlumna.personal.lastNameAsStudent, Validators.required),
        yearGraduated: this.fb.control(this.currentAlumna.personal.yearGraduated, Validators.required)
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
        profession: this.fb.control(this.currentAlumna.professional.profession),
        company: this.fb.control(this.currentAlumna.professional.company)
      })
    });

  }
  checkIfFormIsEditable() {
    this.currentAlumna.id !== this.alumnaService.getIdOfActiveAlumna() ? this.profileForm.disable() : this.profileForm.enable();
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
    if (this.currentAlumna.id !== this.alumnaService.getIdOfActiveAlumna()) {
      return;
    }
    this.alumnaService.updateAlumna(this.profileForm.value as Alumna).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
