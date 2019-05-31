import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray, ValidatorFn, AbstractControl } from '@angular/forms';
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
  isLoaded = false;
  allLocations: AlumnaLocation[];
  broadcastForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private commonDataService: CommonDataService,
    private broadcastService: BroadcastService, private alumnaService: AlumnaService, private router: Router) { }

  ngOnInit() {
    this.alumnaService.getAlumna(this.alumnaService.getIdOfActiveAlumna()).toPromise().then(
      (alumna) => {
        this.currentAlumna = alumna;
        this.allLocations = this.commonDataService.getAllLocations();
        this.allGraduatingYears = this.commonDataService.getAllGraduatingYears();
        this.initForm();
        if (history.state.from && history.state.from === 'tefilos') {
          this.presetTefilaRequest();
        }
        this.isLoaded = true;
      },
      (err) => console.log(err)
    );
  }
  presetTefilaRequest() {
    this.broadcastForm.get('topic').setValue('tefilos');
  }
  initForm() {
    const byYearFormControls = this.allGraduatingYears.map(() => new FormControl(false));
    const byLocationFormControls = this.allLocations.map(() => new FormControl(false));
    this.broadcastForm = this.formBuilder.group({
      replyTo: this.formBuilder.control(
        `${this.currentAlumna.personal.firstName} ${this.currentAlumna.personal.lastNameAsStudent}`),
      recipients: this.formBuilder.group({
        byGraduatingYear: this.formBuilder.array(byYearFormControls),
        byLocation: this.formBuilder.array(byLocationFormControls),
      }, { validator: this.minSelectedVal() }),
      topic: this.formBuilder.control(null, Validators.required),
      subjectLine: this.formBuilder.control(null, Validators.required),
      nameForDavening: this.formBuilder.control(null),
      description: this.formBuilder.control(null, [Validators.required, Validators.maxLength(200)])
    });
    this.activateNameForDaveningValidation();

  }
  minSelectedVal() {
    const validator: ValidatorFn = (control: FormGroup) => {
      const recipientControls: any[] = [
        control.get('byGraduatingYear'),
        control.get('byLocation')
      ];
      const totalSelected = [];
      for (const recCtrl of recipientControls) {
        totalSelected.push(recCtrl.controls.map(ctrl => ctrl.value).filter(val => val === true));
      }
      return totalSelected[0].length > 0 || totalSelected[1].length > 0 ? null : { required: true };
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
