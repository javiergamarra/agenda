import {Component, OnInit} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

/*
 Generated class for the AddTalk page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-add-talk',
  templateUrl: 'add-talk.html'
})
export class AddTalkPage implements OnInit {

  ngOnInit(): void {
    console.log(this.navParams.get('value'));
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTalkPage');
  }

}
