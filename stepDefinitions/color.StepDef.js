var { Given, When, Then } = require('cucumber');
var { browser, element } = require('protractor');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
 
chai.use(chaiAsPromised);

var expect = chai.expect;

var propertiesReader = require('properties-reader');
var properties = propertiesReader('properties/login.properties');


Given('user navigates to the url', async function () {
    await browser.waitForAngularEnabled(false);
    await browser.get(properties.get('colorUrl'));
    await browser.sleep(3000);

});



Then('user verifies the color', async function () {
    let color = await element(by.xpath('//input[@type="submit"]')).getCssValue('color');
    console.log("The colour of element is:" + color);

    expect(color).equal("rgba(255, 255, 255, 1)");

    color = await element(by.id('rightPanel')).getCssValue('color');
    console.log("The color of the div is:" +color);

    expect(color).equal("rgba(95, 122, 119, 1)");
});