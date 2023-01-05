/// <reference types="cypress"/>

import HomePageModel from "../models/homePageModel"
import  ProductPageModel  from "../models/productPageModel"

const homePage= new HomePageModel()
const productPage = new ProductPageModel()
describe("E-Shopping",()=>{
    beforeEach(() => {
        cy.fixture("person").then (function(person){
            cy.log(person)
            this.person = person
        })
    })
    it("login Validation",function(){  
        cy.visit("/")
        homePage.setName(this.person.name);
        homePage.setGenderBox(this.person.gender);
        homePage.assertTwoWayDataBindings(this.person.name);
        homePage.assertMinLength();
        homePage.disableEntrepenurRadioButton();
        homePage.enableEntrepenurRadioButton();
        homePage.clickShopButton();  
        })

       it("Validate able to select products",function(){  
       productPage.selectProduct(this.person.productName);
       productPage.clickCheckout();  
       productPage.ValidateTotalPriceIsCorrect();
       productPage.ContinueCheckout();
       productPage.setDelivaryLocation(this.person.address);
       productPage.setCountry();
       productPage.agreeWithTermsAndCondtion();
       productPage.clickOnPurchaseButton();
       productPage.ValidateSucessMessage();      
        })
})
