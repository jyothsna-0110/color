var { Given, When, Then, After, beforeAll } = require('cucumber');
var { browser, element } = require('protractor');


var propertiesReader = require('properties-reader');
var properties = propertiesReader('properties/login.properties');

After(function (scenarioResult) {

    let self = this;
    if (scenarioResult.result.status === 'FAILED')

        return browser.takeScreenshot().then(function (screenshot) {
            const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64');
            self.attach(decodedImage, 'image/png');
            console.log("scenarioResult =", scenarioResult.result.status)

        });

});

beforeAll(async function () {
    await browser.waitForAngularEnabled(false);
    await browser.get(properties.get('frameUrl'));
    await browser.manage().window().maximize();
});

Given('admin navigates to the url', async function () {
    await browser.switchTo().frame("mce_0_ifr");
    await element(by.xpath('//p[text()="Your content goes here."]')).clear();
    await element(by.className('mce-content-body')).sendKeys("automation");
    await browser.sleep(3000);
});

