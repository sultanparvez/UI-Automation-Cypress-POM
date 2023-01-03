/// <reference types="cypress"/>

import HomePageModel from "../models/homePageModel"
import { ProductPage } from "../pageObjects/ProductPage"

const homePage= new HomePageModel()
const productPage = new ProductPage()
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
        this.person.productName.forEach(function(product){
            cy.selectProduct(product)
            })     
        productPage.getCheckoutButton().click()
        var sum = 0
        productPage.getPriceOfAllProduct().each(($el,index,$list)=>{
           const amounts= $el.text()
            const prices = amounts.split(" ")
            sum = sum+Number(prices[1])
        })
        productPage.getTotals().then((element)=>{
            const TotalAmount= element.text()
            const Total = TotalAmount.split(" ")
            expect(sum).to.equal(Number(Total[1]))
        })
        productPage.getSecondCheckout().click()
        productPage.geDeliveryLocationBox().type(this.person.address)
        productPage.getCountry().click()
        // Cypress.config('defaultCommandTimeout',2000) //overwrting for specfic test
        productPage.getTermsAgreementCheckbox().click({force:true})
        productPage.getPurchaseButton().click()
        productPage.getSuccessMsg().then((element)=>{
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })       
        })
})
