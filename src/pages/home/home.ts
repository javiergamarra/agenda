import {Component, ViewChild, ElementRef, OnInit} from "@angular/core";
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
    <button (click)="showAddTalkPanel()" ion-button color="light">Add talk</button>
  </ion-navbar>
</ion-header>
<ion-content padding>

  <div *ngIf="showAddTalk">
    <add-talk></add-talk>
  </div>
  
  <ion-item>
    <ion-label floating>Search</ion-label>
    <ion-input type="text" #searchInput></ion-input>
  </ion-item>
  
  <talk-row *ngFor="let talk of talks | async" [talk]="talk" (onClick)="onClick($event)"></talk-row>
</ion-content>`
})
export class HomePage implements OnInit {

  talks: any;
  showAddTalk: boolean = false;
  search;

  @ViewChild('searchInput') input: ElementRef;

  ngOnInit(): void {
    // this.talks = Observable.fromEvent(this.input.nativeElement, 'keyup')
    //   .map((e: any) => e.target.value)
    //   .filter(text => text.length > 1)
    //   .debounceTime(700)
    //   .distinctUntilChanged()
    //   .switchMap(term => this.talkService.getTalks(term))
    this.talks = this.talkService.getAllTalks();
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
