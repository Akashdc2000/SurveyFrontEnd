import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  questionControl = new FormControl('');

  @Output() valueEvent = new EventEmitter<void>();
  matcher = new MyErrorStateMatcher();

  getValue() {
    this.valueEvent.emit();
    // console.log('Email: ', this.emailFormControl.value);
    return this.emailFormControl.value;
  }
}
