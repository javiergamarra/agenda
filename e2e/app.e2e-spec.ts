import {browser} from "protractor";

describe('MyApp', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should have "Home" as the title', () => {
    expect(browser.getTitle()).toEqual('Home');
  });
})
