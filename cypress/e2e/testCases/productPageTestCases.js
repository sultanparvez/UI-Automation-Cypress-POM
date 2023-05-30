import {ProductPage} from "../pageObjects/ProductPage"

const productPage= new ProductPage();

class productPageTestCases{
    ValidateProductSelectionFunctionality(productName,address){
        productPage.selectProduct(productName);
        productPage.clickCheckout();  
        productPage.ValidateTotalPriceIsCorrect();
        productPage.ContinueCheckout();
        productPage.setDelivaryLocation(address);
        productPage.setCountry();
        productPage.agreeWithTermsAndCondtion();
        productPage.clickOnPurchaseButton();
        productPage.ValidateSucessMessage();   
    }

}

export default productPageTestCases;