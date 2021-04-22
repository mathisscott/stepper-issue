import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  form: FormGroup;

  submit() {
    console.log('ohai');
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
       firstStep: this.formBuilder.group({
        firstInput1: new FormControl('', [Validators.required]),
        firstInput2:  new FormControl('', [Validators.required])
       }),
      secondStep: this.formBuilder.group({
        secondInput1: new FormControl('', [Validators.required]),
        secondInput2:  new FormControl('', [Validators.required])
      }),
      thirdStep: this.formBuilder.group({
      }),
    });
  }
}
