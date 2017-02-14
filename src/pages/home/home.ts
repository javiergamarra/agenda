import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-home',
  template: `
<ion-header>
  <ion-navbar>
    <ion-title>Home</ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>

  <div [ngStyle]="style(talk)" *ngFor="let talk of talks">
    <h3>{{talk.name}}</h3>{{talk.speaker}}
  </div>
</ion-content>`
})
export class HomePage {

  talks = [{
    name: 'ionic2',
    speaker: 'nhpatt',
    category: 'workshop',
    icon: 'https://ionicframework.com/img/docs/ionic-docs-icon-back.png'
  }, {
    name: 'Rx',
    speaker: 'nhpatt',
    category: 'talk'
  }];

  constructor(public navCtrl: NavController) {
  }

  style(talk) {
    return {
      'border-color': talk.category == 'workshop' ? 'purple' : 'red',
      'border-left': '2px solid #00274F',
      'padding-left': '10px',
      'margin-bottom': '20px'
    }
  }

}
