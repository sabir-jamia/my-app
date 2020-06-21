import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { LoginPage } from './login.po';
import { DashboardPage } from './dashboard.po';

describe('workspace-project App', () => {
   let page: LoginPage;
   let dashboardPage: DashboardPage;

   beforeEach(() => {
      page = new LoginPage();
      dashboardPage = new DashboardPage();
      page.navigateTo();
   });

   it('should display welcome message', () => {
      expect(page.getTitleText()).toEqual('My App');
   });

   describe('with correct credentials', () => {
      it('should be loggedin and navigated to dashboard', () => {
         page.getUsernameInput().sendKeys('admin');
         page.getPasswordInput().sendKeys('admin@123');
         page.getLoginButton().click();
         expect(browser.getCurrentUrl()).toBe(`${browser.baseUrl}dashboard`);
         expect(dashboardPage.getTitleText()).toBe('Dashboard Page');
      });
   });

   describe('with incorrect credentials', () => {
      it('should not be loggedin and no navigation', () => {
         page.getUsernameInput().sendKeys('qwerty');
         page.getPasswordInput().sendKeys('qwerty');
         page.getLoginButton().click();
         expect(browser.baseUrl).toBe(browser.baseUrl);
      });
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
