import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent {
  dateControl = new FormControl('');

  dateFormControl = new FormControl();

  @Output() valueEvent = new EventEmitter<void>();

  getValue() {
    this.valueEvent.emit();
    console.log('Date: ', this.dateControl.value);
    return this.dateControl.value;
  }
}