import { browser, by, element } from 'protractor';

export class LoginPage {
   navigateTo() {
      return browser.get(`${browser.baseUrl}login`);
   }

   getTitleText() {
      return element(by.css('app-root span.title')).getText();
   }

   getUsernameInput() {
      return element(by.css('app-login input[formcontrolname="username"]'));
   }

   getPasswordInput() {
      return element(by.css('app-login input[formcontrolname="password"]'));
   }

   getLoginButton() {
      return element(by.css('app-login button'));
   }
}
