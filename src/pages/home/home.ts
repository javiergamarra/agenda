import {Component} from "@angular/core";
import {Talk} from "../Talk";
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
    <button (click)="showAddTalkPanel()">Add talk</button>
  </ion-navbar>
</ion-header>
<ion-content padding>


  <div *ngIf="showAddTalk">
    <add-talk></add-talk>
  </div>

  <talk-row-component *ngFor="let talk of talks | async" [talk]="talk" (onClick)="onClick($event)"></talk-row-component>
</ion-content>`
})
export class HomePage {

  talks: any;
  showAddTalk: boolean = false;

  constructor(public talkService: TalkService) {
    this.talks = this.talkService.getTalks();
  }

  onClick($event) {
    console.log($event);
  }

  showAddTalkPanel() {
    this.showAddTalk = !this.showAddTalk
  }
}
