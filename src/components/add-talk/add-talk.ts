import {Component} from "@angular/core";
import {TalkService} from "../../providers/talkService";
import {Talk} from "../../pages/Talk";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'add-talk',
  templateUrl: 'add-talk.html',
  providers: [TalkService]
})
export class AddTalkComponent {

  name: FormControl;

  constructor(public talkService: TalkService) {
  }

  addTalk(form) {

    this.name = form.controls.name;
    this.name.hasError('required');
    console.log(form, this.name);

    // let talk = new Talk(name, speaker, "workshop");
    // this.talkService.addTalk(talk).subscribe(x => console.log(x));
  }

}
