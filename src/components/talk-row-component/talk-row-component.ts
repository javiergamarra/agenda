import {Component, Input} from "@angular/core";
import {Talk} from "../../pages/home/Talk";

@Component({
  selector: 'talk-row-component',
  template: `
  <div [ngStyle]="style()">
    <h3>{{talk.name}}</h3>{{talk.speaker}} {{i}}
  </div>
`
})
export class TalkRowComponent {

  @Input()
  talk: Talk;

  text: string;

  constructor() {
    console.log('Hello TalkRowComponent Component');
    this.text = 'Hello World';
  }

  style() {
    return {
      'border-color': this.talk.category == 'workshop' ? 'purple' : 'red',
      'border-left': '2px solid #00274F',
      'padding-left': '10px',
      'margin-bottom': '20px'
    }
  }

}
