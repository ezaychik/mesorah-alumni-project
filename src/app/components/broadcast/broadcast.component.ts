import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.less']
})
export class BroadcastComponent implements OnInit {
  allGraduatingYears: number[] = [2000, 2001, 2002, 2003, 2004, 2005];
  allLocations: string[] = ['New York, NY', 'Jerusalem, IL', 'Dallas, TX'];
  selectedLocations: string[] = [];
  selectedYears: number[] = [];
  name = 'Amelia Badelia';
  byYearFormControls = this.allGraduatingYears.map(control => new FormControl(false));
  byLocationFormControls = this.allLocations.map(control => new FormControl(false));
  broadcastForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    if (history.state.from && history.state.from === 'tefilos') {
      this.presetTefilaRequest();
    }

  }
  presetTefilaRequest() {
    this.broadcastForm.get('subject').setValue('tefilos');
  }
  initForm() {
    this.broadcastForm = this.formBuilder.group({
      replyTo: this.formBuilder.control(this.name),
      recipients: this.formBuilder.group({
        byGraduatingYear: this.formBuilder.array(this.byYearFormControls, this.minSelectedValidator()),
        byLocation: this.formBuilder.array(this.byLocationFormControls, this.minSelectedValidator()),
      }),
      subject: this.formBuilder.control(null, Validators.required),
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
    this.broadcastForm.get('subject').valueChanges.subscribe(
      (subject) => {
        (subject === 'tefilos') ? nameForDaveningForm.setValidators(Validators.required) : nameForDaveningForm.setValidators(null);
        nameForDaveningForm.updateValueAndValidity();
      }
    );
  }
  onSubmit() {
    this.extractSelectedRecipientGroups();
    console.log(this.broadcastForm);

  }
  extractSelectedRecipientGroups() {
    this.selectedYears = this.broadcastForm.get('recipients').get('byGraduatingYear').value
      .map((checked, index) => checked ? this.allGraduatingYears[index] : null)
      .filter(value => value !== null);
    this.selectedLocations = this.broadcastForm.get('recipients').get('byLocation').value
      .map((checked, index) => checked ? this.allLocations[index] : null)
      .filter(value => value !== null);
  }
  onClickYear(event: any, year: number) {
    event.target.checked ? this.selectedYears.push(year) :
      this.selectedYears.splice(this.selectedYears.indexOf(year), 1);
  }
  onClickLocation(event: any, location: string) {
    event.target.checked ? this.selectedLocations.push(location) :
      this.selectedLocations.splice(this.selectedLocations.indexOf(location), 1);
  }
  onlyRecipientsInvalid(): boolean {
    return this.broadcastForm.touched && this.broadcastForm.invalid &&
      (this.broadcastForm.get('subject').valid && this.broadcastForm.get('subjectLine').valid
        && this.broadcastForm.get('description').valid && this.broadcastForm.get('nameForDavening').valid);
  }
}
