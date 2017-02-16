import {Component} from "@angular/core";
import {TalkService} from "../../providers/talkService";
import {FormControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NavController} from "ionic-angular";
import {AddTalkPage} from "../../pages/add-talk/add-talk";

@Component({
  selector: 'add-talk',
  templateUrl: 'add-talk.html',
  providers: [TalkService]
})
export class AddTalkComponent {

  userForm: FormGroup;
  nameControl: FormControl;
  speakerControl: FormControl;
  dateControl: FormControl;

  constructor(public talkService: TalkService, public fb: FormBuilder, public navCtrl: NavController) {
    this.nameControl = new FormControl('', Validators.required);
    this.speakerControl = new FormControl('', [Validators.required, this.speakerValidator]);
    this.dateControl = new FormControl('');
    this.userForm = fb.group({
      name: this.nameControl,
      speaker: this.speakerControl,
      date: this.dateControl
    });
  }

  speakerValidator(control: FormControl) {
    if (control.value == 'nhpatt') {
      return {invalidSpeaker: true};
    }
  }

  addTalk() {
    console.log(this.userForm.value);
    this.navCtrl.push(AddTalkPage, {value: this.userForm.value});
    // let talk = new Talk(name, speaker, "workshop");
    // this.talkService.addTalk(talk).subscribe(x => console.log(x));
  }

}
