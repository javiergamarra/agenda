import {Component, Input} from "@angular/core";
import {Talk} from "../../pages/home/Talk";

@Component({
  selector: 'talk-row-component',
  template: `{{talk.speaker}}`
})
export class TalkRowComponent {

  text: string;

  constructor() {
    console.log('Hello TalkRowComponent Component');
    this.text = 'Hello World';
  }

}
