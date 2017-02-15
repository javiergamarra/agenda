import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import "rxjs/add/operator/map";
import {Talk} from "../pages/Talk";

const ENDPOINT = 'http://data.agenda.wedeploy.io/talks';

@Injectable()
export class TalkService {

  constructor(public http: Http) {
  }

  getTalks(name) {
    let params = new URLSearchParams();
    params.set('filter', JSON.stringify({name}));

    return this.http.get(ENDPOINT, this.createJSONHeaders(params))
      .do(x => console.log(x))
      .map(res => res.json())
  }

  removeAll() {
    return this.http.delete(ENDPOINT, this.createJSONHeaders({}))
      .do(x => console.log(x))
      .map(res => <Talk[]> res.json().data)
  }

  addTalk(talk: Talk) {
    let body = JSON.stringify(talk);
    return this.http.post(ENDPOINT, body, this.createJSONHeaders({}));
  }

  createJSONHeaders(search) {
    let headers = new Headers({'Content-Type': 'application/json'});
    return new RequestOptions({headers, search});
  }

}
