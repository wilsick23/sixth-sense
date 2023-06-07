/**
 * @jest-environment puppeteer
 */

import { expect, test, describe, beforeAll } from '@jest/globals';

describe('End to end testing', () => {
  beforeAll(async () => {
    await page.goto('http://127.0.0.1:8080/index.html');
  }, 30000);

  test('Home page to choose your fortune navigation test', async () => {
    console.log('attempting to go from home to get fortunes');
    const but1 = await page.$('#b1');
    // let text = await page.evaluate(but => but.textContent, but1);
    // console.log(text);
    await but1.click();
    await page.waitForNavigation();
    const newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/choose-your-fortune.html');
  }, 30000);

  /**
 *
 * Below are a bunch of test that tests going between selection pages
 *
 */

  // ----------------------------Love----------------------------

  test('choose your fortune to emotions1 (love) navigation test', async () => {
    const but1 = await page.$('#love-div');
    await but1.click();
    await page.waitForNavigation();
    const newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=love');
  }, 30000);

  test('emotions1 (love) select nothing test', async () => {
    const but1 = await page.$('#button-right');
    await but1.click();
    await page.waitForTimeout(1000); let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=love');

    const buttons = await page.$$('.round-button');
    expect(buttons.length).toBe(5);
  }, 30000);

  test('emotions1 (love) select something test', async () => {
    const but1 = await page.$('#two');
    await but1.click();
    const but2 = await page.$('#button-right');
    await but2.click();
    await page.waitForNavigation();
    const newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions2.html?reading=love');
  }, 30000);

  test('emotions2 (love) select nothing test', async () => {
    const but1 = await page.$('#next');
    await but1.click();
    await page.waitForTimeout(1000); let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions2.html?reading=love');

    const buttons = await page.$$('.button');
    expect(buttons.length).toBe(5);
  }, 30000);

  test('emotions2 to emotions1 (love)', async () => {
    const but1 = await page.$('#back');
    await but1.click();
    await page.waitForNavigation();
    const newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=love');
  }, 30000);

  test('emotions1 (love) back to choose your fortune', async () => {
    const but1 = await page.$('#button-left');
    await but1.click();
    await page.waitForNavigation();
    const newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/choose-your-fortune.html');
    await page.evaluate(() => localStorage.clear());
  }, 30000);

  /* test('CYF to emotions2 (love)', async () => {
    let but1 = await page.$('#love-div');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions2.html?reading=love');
  });

  test('emotions2 to emotions1 (love)', async () => {
    let but1 = await page.$('#back');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=love');
  }); */

  // ----------------------------Career----------------------------

  test('choose your fortune to emotions1 (career) navigation test', async () => {
    const but1 = await page.$('#career-div');
    await but1.click();
    await page.waitForNavigation();
    const newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=career');
  }, 30000);

  test('emotions1 (career) select nothing test', async () => {
    const but1 = await page.$('#button-right');
    await but1.click();
    await page.waitForTimeout(1000); let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=career');

    const buttons = await page.$$('.round-button');
    expect(buttons.length).toBe(5);
  }, 30000);

  test('emotions1 (career) select something test', async () => {
    const but1 = await page.$('#two');
    await but1.click();
    const but2 = await page.$('#button-right');
    await but2.click();
    await page.waitForNavigation();
    const newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions2.html?reading=career');
  }, 30000);

  test('emotions2 (career) select nothing test', async () => {
    const but1 = await page.$('#next');
    await but1.click();
    await page.waitForTimeout(1000); let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions2.html?reading=career');

    const buttons = await page.$$('.button');
    expect(buttons.length).toBe(5);
  }, 30000);

  test('emotions2 to emotions1 (career)', async () => {
    const but1 = await page.$('#back');
    await but1.click();
    await page.waitForNavigation();
    const newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=career');
  }, 30000);

  test('emotions1 (career) back to choose your fortune', async () => {
    const but1 = await page.$('#button-left');
    await but1.click();
    await page.waitForNavigation();
    const newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/choose-your-fortune.html');
    await page.evaluate(() => localStorage.clear());
  }, 30000);

  // ----------------------------Health---------------------------

  test('choose your fortune to emotions1 (health) navigation test', async () => {
    const but1 = await page.$('#health-div');
    await but1.click();
    await page.waitForNavigation();
    const newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=health');
  }, 30000);

  test('emotions1 (health) select nothing test', async () => {
    const but1 = await page.$('#button-right');
    await but1.click();
    await page.waitForTimeout(1000); let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=health');

    const buttons = await page.$$('.round-button');
    expect(buttons.length).toBe(5);
  }, 30000);

  test('emotions1 (health) select something test', async () => {
    const but1 = await page.$('#two');
    await but1.click();
    const but2 = await page.$('#button-right');
    await but2.click();
    await page.waitForNavigation();
    const newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions2.html?reading=health');
  }, 30000);

  test('emotions2 (health) select nothing test', async () => {
    const but1 = await page.$('#next');
    await but1.click();
    await page.waitForTimeout(1000); let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions2.html?reading=health');

    const buttons = await page.$$('.button');
    expect(buttons.length).toBe(5);
  }, 30000);

  test('emotions2 to emotions1 (health)', async () => {
    const but1 = await page.$('#back');
    await but1.click();
    await page.waitForNavigation();
    const newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=health');
  }, 30000);

  test('emotions1 (health) back to choose your fortune', async () => {
    const but1 = await page.$('#button-left');
    await but1.click();
    await page.waitForNavigation();
    const newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/choose-your-fortune.html');
    await page.evaluate(() => localStorage.clear());
  }, 30000);

  // ----------------------------Friends/Family---------------------------

  test('choose your fortune to emotions1 (friends_and_family) navigation test', async () => {
    const but1 = await page.$('#friends-and-family-div');
    await but1.click();
    await page.waitForNavigation();
    const newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=friends_and_family');
  }, 30000);

  test('emotions1 (friends_and_family) select nothing test', async () => {
    const but1 = await page.$('#button-right');
    await but1.click();
    await page.waitForTimeout(1000); let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=friends_and_family');

    const buttons = await page.$$('.round-button');
    expect(buttons.length).toBe(5);
  }, 30000);

  test('emotions1 (friends_and_family) select something test', async () => {
    const but1 = await page.$('#two');
    await but1.click();
    const but2 = await page.$('#button-right');
    await but2.click();
    await page.waitForNavigation();
    const newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions2.html?reading=friends_and_family');
  }, 30000);

  test('emotions2 (friends_and_family) select nothing test', async () => {
    const but1 = await page.$('#next');
    await but1.click();
    await page.waitForTimeout(1000); let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions2.html?reading=friends_and_family');

    const buttons = await page.$$('.button');
    expect(buttons.length).toBe(5);
  }, 30000);

  test('emotions2 to emotions1 (friends_and_family)', async () => {
    const but1 = await page.$('#back');
    await but1.click();
    await page.waitForNavigation();
    const newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=friends_and_family');
  }, 30000);

  test('emotions1 (friends_and_family) back to choose your fortune', async () => {
    const but1 = await page.$('#button-left');
    await but1.click();
    await page.waitForNavigation();
    const newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/choose-your-fortune.html');
    await page.evaluate(() => localStorage.clear());
  }, 30000);
});

/**
 *
 * Below are a bunch of tests that check the general readings page
 *
 */
