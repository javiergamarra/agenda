import {Component} from "@angular/core";
import {TalkService} from "../../providers/talkService";
import {FormControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'add-talk',
  templateUrl: 'add-talk.html',
  providers: [TalkService]
})
export class AddTalkComponent {

  userForm: FormGroup;
  nameControl: FormControl;
  speakerControl: FormControl;

  constructor(public talkService: TalkService, public fb: FormBuilder) {
    this.nameControl = new FormControl('', Validators.required);
    this.speakerControl = new FormControl('', Validators.required);
    this.userForm = fb.group({
      name: this.nameControl,
      speaker: this.speakerControl
    });
  }

  addTalk() {

    console.log(this.userForm.value);

    // let talk = new Talk(name, speaker, "workshop");
    // this.talkService.addTalk(talk).subscribe(x => console.log(x));
  }

}
