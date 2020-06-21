import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
   let page: AppPage;

   beforeEach(() => {
      page = new AppPage();
      page.navigateTo();
   });

   it('should display welcome message', () => {
      expect(page.getTitleText()).toEqual('My App');
   });

   it('should redirect the user to login', () => {
      browser.sleep(2000);
      expect(browser.getCurrentUrl()).toBe(`${browser.baseUrl}login`);
   });

   afterEach(async () => {
      // Assert that there are no errors emitted from the browser
      const logs = await browser.manage().logs().get(logging.Type.BROWSER);
      expect(logs).not.toContain(
         jasmine.objectContaining({
            level: logging.Level.SEVERE,
         } as logging.Entry)
      );
   });
});
