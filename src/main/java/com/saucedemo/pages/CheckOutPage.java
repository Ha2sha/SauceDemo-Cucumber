package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class CheckOutPage extends Utility {
    private static final Logger log = LogManager.getLogger(CheckOutPage.class.getName());

    public CheckOutPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='first-name']")
    WebElement fname;

    @CacheLookup
    @FindBy(xpath = "//input[@id='last-name']")
    WebElement lname;

    @CacheLookup
    @FindBy(xpath = "//input[@id='postal-code']")
    WebElement postCode;

    @CacheLookup
    @FindBy(xpath = "//input[@id='continue']")
    WebElement continueBtn;

    @CacheLookup
    @FindBy(xpath = "//button[@id='finish']")
    WebElement finishBtn;

    @CacheLookup
    @FindBy(xpath = "//h2[@class='complete-header']")
    WebElement finishOrderText;


    public void enterFirstName(String firstname) {
        sendTextToElement(fname, firstname);
        log.info("Entering First Name: " + firstname);
    }

    public void enterLastName(String lastname) {
        sendTextToElement(lname, lastname);
        log.info("Entering Last Name: " + lastname);
    }

    public void enterPostCode(String pcode) {
        sendTextToElement(postCode, pcode);
        log.info("Entering PostCode: " + pcode);
    }

    public void clickOnContinueButton() {
        clickOnElement(continueBtn);
        log.info("Clicking on Continue Button. ");
    }

    public void clickOnFinishButton() {
        clickOnElement(finishBtn);
        log.info("Clicking on Finish Button. ");
    }

    public void verifyOrderText(String exp) {
        Assert.assertEquals ("Verifying Order Completion Text", exp, getTextFromElement(finishOrderText));
    }


}
