
describe('End to end testing', () => {
    beforeAll(async () => {
      await page.goto('http://127.0.0.1:8080/index.html');
    });
  
    it('Home page to choose your fortune navigation test', async () => {
        console.log("attempting to go from home to get fortunes");
        let but1 = await page.$('#b1');
        //let text = await page.evaluate(but => but.textContent, but1);
        //console.log(text);
        await but1.click();
        await page.waitForNavigation();
        let newUrl = await page.url();
        expect(newUrl).toBe('http://127.0.0.1:8080/choose-your-fortune.html');
    });

    it('choose your fortune to choose a picture (love) navigation test', async () => {
        let but1 = await page.$('#love-div');
        await but1.click();
        await page.waitForNavigation();
        let newUrl = await page.url();
        expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=love');
    });
  });