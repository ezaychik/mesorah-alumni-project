import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray, ValidatorFn } from '@angular/forms';
import { CommonDataService } from 'src/app/services/common-data.service';
import { AlumnaLocation } from 'src/app/models/location.model';
import { Alumna } from 'src/app/models/alumna/alumna';
import { AlumnaService } from 'src/app/services/alumna.service';
import { BroadcastService } from 'src/app/services/broadcast.service';
import { Broadcast } from 'src/app/models/broadcast.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.less']
})
export class BroadcastComponent implements OnInit {
  allGraduatingYears: number[];
  currentAlumna: Alumna;
  allLocations: AlumnaLocation[];
  selectedLocations: string[] = [];
  selectedYears: number[] = [];
  name = 'Amelia Badelia';

  broadcastForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private commonDataService: CommonDataService,
    private broadcastService: BroadcastService, private alumnaService: AlumnaService, private router: Router) { }

  ngOnInit() {
    this.currentAlumna = this.alumnaService.getAlumna(5);
    this.allLocations = this.commonDataService.getAllLocations();
    this.allGraduatingYears = this.commonDataService.getAllGraduatingYears();
    this.initForm();
    if (history.state.from && history.state.from === 'tefilos') {
      this.presetTefilaRequest();
    }

  }
  presetTefilaRequest() {
    this.broadcastForm.get('topic').setValue('tefilos');
  }
  initForm() {
    const byYearFormControls = this.allGraduatingYears.map(() => new FormControl(false));
    const byLocationFormControls = this.allLocations.map(() => new FormControl(false));
    this.broadcastForm = this.formBuilder.group({
      replyTo: this.formBuilder.control(
        `${this.currentAlumna.personalInfo.name} ${this.currentAlumna.personalInfo.lastNameAsMesorahStudent}`),
      recipients: this.formBuilder.group({
        byGraduatingYear: this.formBuilder.array(byYearFormControls, this.minSelectedValidator()),
        byLocation: this.formBuilder.array(byLocationFormControls, this.minSelectedValidator()),
      }),
      topic: this.formBuilder.control(null, Validators.required),
      subjectLine: this.formBuilder.control(null, Validators.required),
      nameForDavening: this.formBuilder.control(null),
      description: this.formBuilder.control(null, [Validators.required, Validators.maxLength(200)])
    });
    this.activateNameForDaveningValidation();
  }
  minSelectedValidator(min = 1): ValidatorFn {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls.map(control => control.value).filter(value => value === true);
      return totalSelected.length > 0 ? null : { required: true };
    };
    return validator;
  }

  activateNameForDaveningValidation() {
    const nameForDaveningForm = this.broadcastForm.get('nameForDavening');
    this.broadcastForm.get('topic').valueChanges.subscribe(
      (subject) => {
        (subject === 'tefilos') ? nameForDaveningForm.setValidators(Validators.required) : nameForDaveningForm.setValidators(null);
        nameForDaveningForm.updateValueAndValidity();
      }
    );
  }
  onSubmit() {
    const message = this.broadcastService.broadcastMessage(this.broadcastForm.value as Broadcast);
    window.alert(message);
    this.router.navigate(['home']);
  }
  onlyRecipientsInvalid(): boolean {
    return this.broadcastForm.touched && this.broadcastForm.invalid &&
      (this.broadcastForm.get('topic').valid && this.broadcastForm.get('subjectLine').valid
        && this.broadcastForm.get('description').valid && this.broadcastForm.get('nameForDavening').valid);
  }
}
