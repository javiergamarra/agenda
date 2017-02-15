import {Component} from "@angular/core";
import {TalkService} from "../../providers/talkService";
import {FormControl, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'add-talk',
  templateUrl: 'add-talk.html',
  providers: [TalkService]
})
export class AddTalkComponent {

  private userForm: FormGroup;

  constructor(public talkService: TalkService, public fb: FormBuilder) {
    this.userForm = fb.group({
      name: '',
      speaker: ''
    });
  }

  addTalk() {

    console.log(this.userForm.value);

    // let talk = new Talk(name, speaker, "workshop");
    // this.talkService.addTalk(talk).subscribe(x => console.log(x));
  }

}
