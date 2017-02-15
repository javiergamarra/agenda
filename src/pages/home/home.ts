import {Component, ViewChild, ElementRef, OnInit} from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import {TalkService} from "../../providers/talkService";
import {Observable} from "rxjs";

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
  
  <input type="text" #searchInput/>

  <talk-row-component *ngFor="let talk of talks | async" [talk]="talk" (onClick)="onClick($event)"></talk-row-component>
</ion-content>`
})
export class HomePage implements OnInit {

  talks: any;
  showAddTalk: boolean = false;

  @ViewChild('searchInput') input: ElementRef;

  ngOnInit(): void {
    this.talks = Observable.fromEvent(this.input.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter(text => text.length > 1)
      .debounceTime(700)
      .distinctUntilChanged()
      .switchMap(term => this.talkService.getTalks(term));
  }

  constructor(public talkService: TalkService) {
  }

  onClick($event) {
    console.log($event);
  }

  showAddTalkPanel() {
    this.showAddTalk = !this.showAddTalk
  }
}
