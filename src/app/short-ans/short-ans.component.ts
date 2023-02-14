import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-short-ans',
  templateUrl: './short-ans.component.html',
  styleUrls: ['./short-ans.component.scss'],
})
export class ShortAnsComponent {
  questionControl = new FormControl('');
  answerControl = new FormControl('');

  @Output() valueEvent = new EventEmitter<void>();

  getValue() {
    // console.log(this.questionControl)
    // console.log('Question: ', this.questionControl.value);
    // console.log('Answer: ', this.answerControl.value);
    // return {
    //   question: this.questionControl.value,
    //   answer: this.answerControl.value,
    // };
    return [];
  }
}
