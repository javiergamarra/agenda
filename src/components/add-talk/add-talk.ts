import {Component} from "@angular/core";
import {TalkService} from "../../providers/talkService";
import {Talk} from "../../pages/Talk";

@Component({
  selector: 'add-talk',
  templateUrl: 'add-talk.html',
  providers: [TalkService]
})
export class AddTalkComponent {

  constructor(public talkService: TalkService) {
  }

  addTalk(name, speaker) {
    let talk = new Talk(name, speaker, "workshop");
    this.talkService.addTalk(talk).subscribe(x => console.log(x));
  }

}
