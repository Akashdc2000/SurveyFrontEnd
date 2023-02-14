import { Component, ViewChild } from '@angular/core';
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { HeadComponent } from '../head/head.component';
import { ShortAnsComponent } from '../short-ans/short-ans.component';
import { NumberComponent } from '../number/number.component';
import { EmailComponent } from '../email/email.component';
import { DateComponent } from '../date/date.component';
import { SingleCorrectComponent } from '../single-correct/single-correct.component';
import { MultipleCorrectComponent } from '../multiple-correct/multiple-correct.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';



export class Survey {
  question: string | null;
  answertype: string | null;
  options: string[];
  constructor(question: string, answerType: string, option: string[]) {
    this.question = question
    this.answertype = answerType
    this.options = option
  }
}


export class RootObject {
  title: string | null;
  email: string | null;
  survey: Survey[] = [];
  constructor(title: string, email: string, survey: Survey[]) {
    this.title = title
    this.email = email
    this.survey = survey
  }
}

const formElementsMapping = {
  Title: 'app-head',
  'Short Answer': 'app-short-ans',
  // Number: 'app-number',
  Email: 'app-email',
  // Date: 'app-date',
  // 'Single Correct': 'app-single-correct',
  // 'Multiple Correct': 'app-multiple-correct',
};

@Component({
  selector: 'app-create-form',
  templateUrl: 'create-form.component.html',
  styleUrls: ['create-form.component.scss'],
})
export class CreateFormComponent {

  public jsonobj: RootObject = new RootObject('', '', []);

  questions = [];

  constructor(public httpclient: HttpClient) { }

  formElements = [
    'Title',
    'Short Answer',
    'Number',
    'Email',
    'Date',
    'Single Correct',
    'Multiple Correct',
  ];

  mainForm = [
    'Title',
    'Email',
    'Short Answer',
    // 'Number',

  ];

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else if (
      event.previousContainer.id === 'formElements' &&
      event.container.id === 'mainForm'
    ) {
      const formElement = event.previousContainer.data[event.previousIndex];
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      event.container.data[event.currentIndex] = formElement;
    } else if (
      event.previousContainer.id === 'mainForm' &&
      event.container.id === 'formElements'
    ) {
      event.previousContainer.data.splice(event.previousIndex, 1);
    }
  }

  @ViewChild(HeadComponent)
  headComponent!: HeadComponent;

  @ViewChild(ShortAnsComponent)
  shortAnsComponent!: ShortAnsComponent;

  // @ViewChild(NumberComponent)
  // numberComponent!: NumberComponent;

  @ViewChild(EmailComponent)
  emailComponent!: EmailComponent;

  // @ViewChild(DateComponent)
  // dateComponent!: DateComponent;

  // @ViewChild(SingleCorrectComponent)
  // singleCorrectComponent!: SingleCorrectComponent;

  @ViewChild(MultipleCorrectComponent)
  multipleCorrectComponent!: MultipleCorrectComponent;

  onFormSubmit() {
    const formData: any[] = [];
    for (let i = 0; i < this.mainForm.length; i++) {
      const que: Survey = new Survey("", "", []);
      // let data:string[]=[]
      const key = this.mainForm[i];
      switch (key) {

        case 'Title':
          this.jsonobj.title = this.headComponent.getValue()
          break;

        case 'Short Answer':
          let short = this.shortAnsComponent.getValue();
          short.forEach(question => {
            que.question = question;
            que.options = ['NA'];
            que.answertype = 'text';
            this.jsonobj.survey.push(que);
          });
          break;

        case 'Email':
          this.jsonobj.email = this.emailComponent.getValue();
          break;

        case 'Multiple Correct':
          let data = this.multipleCorrectComponent.getValue();

          // que.question = data[0];
          // que.answertype = 'multiple'
          // que.options = data[1];


          this.jsonobj.survey.push(que)
          break;
        default:
          break;
      }
    }

    console.log(this.jsonobj);
    // // Store formData in the database
    // let header1=new HttpHeaders({
    //   'content-Type':'application/json'
    // })
    // this.httpclient.post('http://localhost:7777/survey/addsurvey',this.jsonobj,{headers:header1}).subscribe((response)=>{
    //   console.log(response)
    // })

  }
}
