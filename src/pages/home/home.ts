import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  talk = {
    name: 'ionic2',
    speaker: 'nhpatt',
    category: 'workshop'
  };

  constructor(public navCtrl: NavController) {
  }

  style(talk) {
    return {
      'border-color': talk.category == 'workshop' ? 'purple' : 'red',
      'border-left': '2px solid #00274F',
      'padding-left': '10px'
    }
  }

}
