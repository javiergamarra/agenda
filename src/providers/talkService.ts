import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";
import {Talk} from "../pages/home/Talk";

@Injectable()
export class TalkService {

  constructor(public http: Http) {
    console.log('Hello TalkService Provider');
  }

  getTalks() {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.get('http://data.agenda.wedeploy.io/talks', options)
      .do(x => console.log(x))
      .map(res => res.json())
  }

  removeAll() {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.delete('http://data.agenda.wedeploy.io/talks', options)
      .do(x => console.log(x))
      .map(res => <Talk[]> res.json().data)
  }

  post() {
    let talks = [
      new Talk('ionic2', 'nhpatt', 'workshop', 'https://ionicframework.com/img/docs/ionic-docs-icon-back.png'),
      new Talk('Rx', 'nhpatt', 'talk')
    ];
    let body = JSON.stringify(talks);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post('http://data.agenda.wedeploy.io/talks', body, options);
  }


}
