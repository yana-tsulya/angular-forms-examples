import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  form: FormGroup;

  get additionalEmails() {
    return this.form.get('additionalEmails') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, Validators.email),
      firstName: new FormControl(),
      lastName: new FormControl(),
      additionalEmails: new FormArray([])
    });

    // this.form = this.fb.group({
    //   email: ['', Validators.email],
    //   firstName: '',
    //   lastName: '',
    //   additionalEmails: this.fb.array([])
    // });
  }

  addEmail() {
    this.additionalEmails.push(new FormControl());
  }

  deleteEmail(index: number) {
    this.additionalEmails.removeAt(index);
  }
}
