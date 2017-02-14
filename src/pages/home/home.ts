import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {Talk} from "./Talk";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import {TalkService} from "../../providers/talkService";

@Component({
  selector: 'page-home',
  providers: [TalkService],
  template: `
<ion-header>
  <ion-navbar>
    <ion-title>Home</ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>

  <!--<div [ngStyle]="style(talk)" *ngFor="let talk of talks; let i = index">-->
    <!--<h3>{{talk.name}}</h3>{{talk.speaker}} {{i}}-->
    <!---->
    <!--<div style="border: 1px solid red" *ngIf="i != talks.length-1"></div>-->
  <!--</div>-->
  
  <talk-row-component *ngFor="let talk of talks" [talk]="talk"></talk-row-component>
</ion-content>`
})
export class HomePage {

  talks: Array<Talk>;

  constructor(public navCtrl: NavController, public talkService: TalkService) {
    this.talkService.getTalks()
      .subscribe(x => {
        this.talks = x
      });
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
