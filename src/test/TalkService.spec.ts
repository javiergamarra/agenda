import {ComponentFixture, async} from "@angular/core/testing";
import {TestUtils} from "../test";
import {ContactPage} from "../pages/contact/contact";

let fixture: ComponentFixture<ContactPage> = null;
let instance: any = null;

describe('Pages: ContactPage', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([ContactPage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));

  it('should create the hello ionic page', async(() => {
    expect(instance).toBeTruthy();
  }));
});
