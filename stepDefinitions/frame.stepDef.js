var {Given,When, Then} =require('cucumber');
var {browser, element} =require('protractor');

Given('user navigates to the Url {string}',async function (url) {
   await browser.waitForAngularEnabled(false);
   await browser.get(url);
   await browser.manage().window().maximize();
   await browser.sleep(3000); 
   await browser.switchTo().frame(0);
   await element(by.xpath('//input[@type="text"]')).sendKeys("protractor");
   await browser.sleep(5000);
});