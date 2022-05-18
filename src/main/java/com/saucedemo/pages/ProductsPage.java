package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class ProductsPage extends Utility {
    private static final Logger log = LogManager.getLogger(ProductsPage.class.getName());

    public ProductsPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//select[@class='product_sort_container']")
    WebElement sortDropDown;

    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-sauce-labs-fleece-jacket']")
    WebElement costliestProductAddToCart;

    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-sauce-labs-onesie']")
    WebElement cheapestProductAddToCart;

    @CacheLookup
    @FindBy(xpath = "//a[@class='shopping_cart_link']")
    WebElement openShopCart;

    public void selectSortByPriceHighToLow(String text) {
        selectByVisibleTextFromDropDown(sortDropDown, text);
        log.info("Selecting sort by price High to Low : "+ text);
    }

    public void AddCostliestProductToCart() {
        clickOnElement(costliestProductAddToCart);
        log.info("Adding Costliest Product to cart. ");
    }
    public void AddCheapestProductToCart() {
        clickOnElement(cheapestProductAddToCart);
        log.info("Adding Cheapest Product to cart. ");
    }

    public void openShoppingCart() {
        clickOnElement(openShopCart);
        log.info("Opening Shopping Cart. ");
    }


}
