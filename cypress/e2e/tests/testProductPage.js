import {ProductPage} from "../pageObjects/ProductPage"

const productPage= new ProductPage();

class testProductPage{
    ValidateProductSelectionFunctionality(productName,address){
        productPage.selectProduct(productName)
                .clickCheckout()
                .ValidateTotalPriceIsCorrect()
                .ContinueCheckout()
                .setDelivaryLocation(address)
                .setCountry()
                .agreeWithTermsAndCondtion()
                .clickOnPurchaseButton()
                .ValidateSucessMessage()  
    }

}

export default testProductPage;