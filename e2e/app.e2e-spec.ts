import {browser, element, by, ElementFinder} from "protractor";

let addTalkButton: ElementFinder = element(by.buttonText('Add talk'));

describe('MyApp', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should have "Home" as the title', () => {
    expect(browser.getTitle()).toEqual('Home');
  });

  it('has a button for adding talks', () => {
    expect(addTalkButton.isPresent()).toEqual(true);
  });

  it('should display a form to add talks when clicking the button', () => {
    addTalkButton.click();
    browser.driver.sleep(1000);
    expect(element(by.name('speaker')).isPresent()).toEqual(true);
  });

  it('should enable button when I fill the fields', () => {
    addTalkButton.click();
    browser.driver.sleep(1000);

    let speakerField = element(by.css('#speakerInput input'));
    'nhpatt'.split('').map(c => speakerField.sendKeys(c));
    expect(speakerField.isPresent()).toEqual(true);
    browser.driver.sleep(1000);
    speakerField.getWebElement().getText().then(x => {
      let nameField = element(by.css('#nameInput input'));
      'nhpatt'.split('').map(c => nameField.sendKeys(c));

      expect(element(by.id('submitAddTalk')).isEnabled());
    });
  });
});
