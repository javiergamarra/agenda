import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Talk} from "../../pages/Talk";

@Component({
  selector: 'talk-row-component',
  template: `
  <div [ngStyle]="style()" (click)="click()">
    <h3>{{talk.name}}</h3>{{talk.speaker}}
    {{date() | date:"HH:mm"}}
  </div>
`
})
export class TalkRowComponent {

  @Input()
  talk: Talk;

  @Output()
  onClick: EventEmitter<Talk> = new EventEmitter<Talk>();

  constructor() {
  }

  click() {
    this.onClick.emit(this.talk);
  }

  style() {
    return {
      'border-color': this.talk.category == 'workshop' ? 'purple' : 'red',
      'border-left': '2px solid #00274F',
      'padding-left': '10px',
      'margin-bottom': '20px'
    }
  }

  date() {
    return new Date();
  }

}
