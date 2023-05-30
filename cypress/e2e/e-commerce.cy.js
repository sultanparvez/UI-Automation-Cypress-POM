/// <reference types="cypress"/>

import homePageTestCases from "./testCases/homePageTestCases"
import productPageTestCases from "./testCases/productPageTestCases"

const homePage= new homePageTestCases()
const productPage = new productPageTestCases()

describe("E-Shopping",()=>{
    beforeEach(() => {
        cy.fixture("person").then (function(person){
            cy.log(person)
            this.person = person
        })
    })

    it("login Validation",function(){  
        cy.visit("/")
        homePage.login(this.person.name,this.person.gender);
        })

    it("Validate able to select products",function(){  
        productPage.ValidateProductSelectionFunctionality(this.person.productName,this.person.address)
        })
})
