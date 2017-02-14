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
  <talk-row-component *ngFor="let talk of talks" [talk]="talk" (onClick)="onClick($event)"></talk-row-component>
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

  onClick($event) {
    console.log($event);
  }
}
