/// <reference types="cypress"/>

import testHomePage from "./tests/testHomePage"
import testProductPage from "./tests/testProductPage"

const homePage= new testHomePage()
const productPage = new testProductPage()

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
