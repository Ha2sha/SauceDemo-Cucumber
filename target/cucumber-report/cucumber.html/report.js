$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("searchfunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Flight Search Test",
  "description": "As a user I want to purchase cheapest and costliest product from the saucedemo after sorting the products by High to Low filter.",
  "id": "flight-search-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4863799400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User navigates saucedemo page and complete the item purchase",
  "description": "",
  "id": "flight-search-test;user-navigates-saucedemo-page-and-complete-the-item-purchase",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on saucedemo page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with credential username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I filter the products by \"Price (high to low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select cheapest \u0026 costliest products and add to basket",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I open shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I go to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter details firstname \"Hina\", lastName \"Devani\" and zipPostalCode \"HA3\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on finish button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should be able to see message \"THANK YOU FOR YOUR ORDER\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFunctionalityTestSetps.iAmOnSaucedemoPage()"
});
formatter.result({
  "duration": 183553200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 34
    },
    {
      "val": "secret_sauce",
      "offset": 63
    }
  ],
  "location": "SearchFunctionalityTestSetps.iLoginWithCredentialUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 294610200,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalityTestSetps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 172949300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (high to low)",
      "offset": 26
    }
  ],
  "location": "SearchFunctionalityTestSetps.iFilterTheProductsBy(String)"
});
formatter.result({
  "duration": 185768900,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalityTestSetps.iSelectCheapestCostliestProductsAndAddToBasket()"
});
formatter.result({
  "duration": 158131300,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalityTestSetps.iOpenShoppingCart()"
});
formatter.result({
  "duration": 95173900,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalityTestSetps.iGoToCheckout()"
});
formatter.result({
  "duration": 82432800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hina",
      "offset": 27
    },
    {
      "val": "Devani",
      "offset": 44
    },
    {
      "val": "HA3",
      "offset": 71
    }
  ],
  "location": "SearchFunctionalityTestSetps.iEnterDetailsFirstnameLastNameAndZipPostalCode(String,String,String)"
});
formatter.result({
  "duration": 286344700,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalityTestSetps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 104225400,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalityTestSetps.iClickOnFinishButton()"
});
formatter.result({
  "duration": 89226500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "THANK YOU FOR YOUR ORDER",
      "offset": 33
    }
  ],
  "location": "SearchFunctionalityTestSetps.iShouldBeAbleToSeeMessage(String)"
});
formatter.result({
  "duration": 44928100,
  "status": "passed"
});
formatter.after({
  "duration": 730059100,
  "status": "passed"
});
});