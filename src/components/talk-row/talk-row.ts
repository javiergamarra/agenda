import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Talk} from "../../pages/Talk";

@Component({
  selector: 'talk-row',
  template: `
<ion-card [ngStyle]="style()" (click)="click()">
  <ion-card-header>{{talk.name}}</ion-card-header>
  <ion-card-content>
    <ion-icon name="logo-angular"></ion-icon>
  {{talk.speaker}}
    {{date() | date:"HH:mm"}}
  </ion-card-content>
</ion-card>
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
