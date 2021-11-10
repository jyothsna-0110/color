var { Given, When, Then } = require('cucumber');
var { browser, element } = require('protractor');
var { expect } = require('chai');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var propertiesReader = require('properties-reader');
const { protractor } = require('protractor/built/ptor');
var properties = propertiesReader('properties/login.properties');

var EC = browser.ExpectedConditions;

//admin navigates to the website
Given('admin navigates to the SmartOps', async function () {
    try {
        await browser.waitForAngularEnabled(false);
        await browser.get(properties.get('siteUrl'));
        await browser.manage().window().maximize();
    } catch (error) {
        console.log('user navigates to the smartops application');
        console.log(error);
    }
});

//admin enters the username
Then('admin enters the username', async function () {
    try {
        await browser.wait(EC.visibilityOf(element(by.id('username'))), 100000);
        await element(by.id('username')).sendKeys(properties.get('userName'));

    } catch (error) {
        console.log('invalid username please provide a valid username');
        console.log(error.name);
    }
});

//admin enters the password
Then('admin enters the password', async function () {
    try {
        await element(by.id('password')).sendKeys(properties.get('password'));

    } catch (error) {
        console.log('invalid password');
        console.log(error);
    }
});

//admin clicks on signin button
Then('admin click on submitt button', async function () {
    try {
        await element(by.id('kc-login')).click();

    } catch (error) {
        console.log('unable to click on sign in button');
        console.log(error);
    }
});


//admin checks the project listing element
Then('admin verifies the project listing element is present or not', async function () {
    try {
        await browser.wait(EC.visibilityOf(element(by.xpath('//h1[text()="Project Listing"]'))), 100000);

        await element(by.xpath('//h1[text()="Project Listing"]')).isDisplayed().then(function (present) {
            expect(present).to.be.true;
        });

        await browser.wait(EC.invisibilityOf(element(by.id('kc-login'))), 100000);

    } catch (error) {
        console.log('checks the project listing element');
        console.log(error);
    }
});

//admin checks the edit configuration element
Then('admin verifies the edit configuration element is present or not', async function () {
    try {

        await browser.wait(EC.visibilityOf(element(by.xpath('//h1[text()="Project Listing"]'))), 100000);
        await element(by.xpath('//span[text()="Edit Configuration"]')).isDisplayed().then(function (present) {
            expect(present).to.be.true;
        });
        await browser.wait(EC.invisibilityOf(element(by.id('kc-login'))), 100000);

    } catch (error) {
        console.log('checks the configuration element');
        console.log(error);
    }
});


Then('admin selects the project name as {string}', async function (projectName) {
    try {
        await element(by.xpath('//input[@placeholder="Search"]')).sendKeys(projectName);
        await browser.sleep(4000);
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
        await browser.sleep(10000);
    } catch (error) {
        console.log('selects the project name');
        console.log(error);
    }
});


Then('admin clicks on project', async function () {
    try {
        await element(by.xpath('//h3[text()=" Automation_S1 "]')).click();
        await browser.wait(EC.visibilityOf(element(by.xpath('//a[text()="Dashboard"]'))), 100000);
        await browser.wait(EC.invisibilityOf(element(by.xpath('//input[@placeholder="Search"]'))), 100000);
    } catch (error) {
        console.log('clicks on the project name');
        console.log(error);
    }
});

Then('admin clicks on alerts', async function () {
    try {
        await element(by.xpath('//a[text()="Alerts"]')).click();

    } catch (error) {
        console.log(error);
    }
});


Then('admin clicks on filter by severity and selects the severity level as {string}', async function (severityLevel) {
    try {
        await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Alerts"]'))), 100000);
        await browser.wait(EC.presenceOf(element(by.xpath('//input[@name="severity"]//following::span[text()=" Filter by Severity "]'))), 100000);
        await element(by.xpath('//input[@name="severity"]//following::span[text()=" Filter by Severity "]')).click();
        await element(by.xpath('//span[text()="' + severityLevel + '"]')).click();
        await browser.sleep(3000);
    } catch (error) {
        console.log(error);
    }
});

Then('admin clicks on tickets',async function () {
    try {
        await element(by.xpath('//a[text()="Tickets"]')).click();
        await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Tickets"]'))),100000);
    } catch (error) {
        console.log(error);
    }
});
