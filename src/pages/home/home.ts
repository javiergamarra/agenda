import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  talk = {
    name: 'ionic2',
    speaker: 'nhpatt'
  };

  constructor(public navCtrl: NavController) {
  }

}
