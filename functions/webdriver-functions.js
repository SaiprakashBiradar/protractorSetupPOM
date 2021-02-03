// require  { browser, element, by } from "protractor";
var until = protractor.ExpectedConditions;

let wDFunctions= function (){
    this.getUrl =   function (url){
        browser.get(url);
    }
    waitForElementDisplayed =   function (element){
        browser.wait(until.visibilityOf(element,30000,"waiting for element : "));
    }
    this.clickOnElement = function  (element){
        waitForElementDisplayed(element);
        element.click()
    }
     this.enterText = function (element,text){
        waitForElementDisplayed(element);
        element.sendKeys(text);
    }
    this.getElementText =  function (element){
        waitForElementDisplayed(element.get(0));
        return  element.getText();
    }
    this.getAttributeOfElement=  function (element,attribute){
        waitForElementDisplayed(element);
        browser.sleep(3000);
        return  element.getAttribute(attribute);
        // return  element.getText();

    }
}
module.exports = new wDFunctions();