import puppeteer from 'puppeteer';
import { expect } from 'chai';
import { loginUrl, testTimeout} from '../globals.js';

describe('Login UI Test', function () {
  this.timeout(testTimeout); 

  let browser, page;

  before(async () => {
    browser = await puppeteer.launch({
      headless: false,
      args: [
        '--start-maximized',
      ],
    });
    const pages = await browser.pages();
    page = pages[0];
    await page.setViewport({ width: 1280, height: 720 }); 
    await page.goto(loginUrl);
  });

  after(async () => {
    await browser.close();
  });
  // Adding delay
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  it('Should load the login page', async () => {
    const title = await page.title();
    expect(title).to.include('Swag Labs');
  });

  it('should display error for invalid credentials', async () => {
    await page.type('[id="user-name"]', 'standard_uer');
    await page.type('[id="password"]', 'secret_ce');
    await page.click('[id="login-button"]');
    await page.waitForSelector('.error-message-container');

    // Validating the error message
    const errorMessage = await page.$eval('.error-message-container', el => el.textContent);
    expect(errorMessage).to.include('Epic sadface: Username and password do not match any user in this service');

    // Clearing input fields 
    await page.evaluate(() => {
        document.querySelector('[id="user-name"]').value = '';
      });
  });

  it('should log in successfully with valid credentials', async () => {
    await page.type('[id="user-name"]', 'standard_user');
    await page.evaluate(() => {
        document.querySelector('[id="password"]').value = '';
      });
    await page.type('[id="password"]', 'secret_sauce');
    await page.click('[id="login-button"]');
    const currentUrl = page.url();
    expect(currentUrl).to.include('/inventory.html');
  });
});
