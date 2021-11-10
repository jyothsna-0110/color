var {Given,When,Then} =require('cucumber');
var{browser, element} =require('protractor');
var EC=browser.ExpectedConditions;


Given('admin navugates to the url {string}',async function (url) {
    await browser.waitForAngularEnabled(false);
    await browser.get(url);
    await browser.sleep(3000);
    await browser.manage().window().maximize();
    
});

Then('admin switch to frame',async function () {
    await browser.sleep(2000);
    await browser.switchTo().frame("packageListFrame");
    await element(by.xpath('//a[text()="org.openqa.selenium.devtools"]')).click();
    await browser.sleep(3000);
    

    await browser.switchTo().defaultContent();
    await browser.switchTo().frame("packageFrame");
    await element(by.xpath('//a[text()="DevTools"]')).click();
    await browser.sleep(5000);
  


    await browser.switchTo().defaultContent();
    await browser.sleep(3000);
    await browser.switchTo().frame("classFrame");
    await browser.sleep(2000);
    await element(by.xpath('//div[@class="topNav"]//a[text()="Deprecated"]')).click();
    await browser.sleep(5000);    
});