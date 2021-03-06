import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-subscription-reactive-form',
  templateUrl: './subscription-reactive-form.component.html',
  styleUrls: ['./subscription-reactive-form.component.scss']
})
export class SubscriptionReactiveFormComponent implements OnInit {
  email: FormControl;

  constructor() { }

  ngOnInit() {
    this.email = new FormControl('example@gmail.com',
      Validators.compose([Validators.email, Validators.minLength(2)]));

    console.dir(this.email);
  }

  onSubmit() {
    if (this.email.invalid) {
      return;
    }

    console.log(this.email.value);
  }
}
