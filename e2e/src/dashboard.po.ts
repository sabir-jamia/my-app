import { browser, by, element } from 'protractor';

export class DashboardPage {
   navigateTo() {
      return browser.get(`${browser.baseUrl}dashboard`);
   }

   getTitleText() {
      return element(by.css('app-root h1.title')).getText();
   }
}
