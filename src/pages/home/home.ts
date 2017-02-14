import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  talk = 'Hi!';

  constructor(public navCtrl: NavController) {
    setTimeout(() => this.talk = 'Hello!', 2000)
  }

}
