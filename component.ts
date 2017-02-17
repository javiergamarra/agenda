import {Component} from "@angular/core";

@Component({
  selector: 'codelyzer',
  template: `
    <h1>Hello {{ nme }}!</h1>
  `
})
class Codelyzer {
  name: string = 'World';

  ngOnInit() {
    console.log('Initialized');
  }
}
