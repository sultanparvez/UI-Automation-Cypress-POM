export class ProductPage {
    //  Object

    getCheckoutButton(){
        return cy.get('#navbarResponsive .navbar-nav .nav-item .nav-link')
    }
    getSecondCheckout(){
        return cy.get('.btn.btn-success')
    }
    geDeliveryLocationBox(){
        return cy.get('input[id="country"]')
    }
    getCountry(){
        return cy.get('.suggestions > ul > li > a')
    }
    getTermsAgreementCheckbox(){
        return cy.get('div div #checkbox2')
    }
    getPurchaseButton(){
        return cy.get('.ng-untouched > .btn')
    }
    getSuccessMsg(){
        return cy.get('.alert')
    }
    getPriceOfAllProduct(){
        return cy.get( 'tr > td:nth-child(4) > strong')
    }
    getTotals(){
        return cy.get(' tr > td > h3 > strong')
    }

    //  Methods or Funtions

    selectProduct(products){
        products.forEach(function(product){
            cy.selectProduct(product)
            }) 
    }
    clickCheckout(){
    this.getCheckoutButton().click()
    }   
    ValidateTotalPriceIsCorrect(){
    var sum = 0
    this.getPriceOfAllProduct().each(($el,index,$list)=>{
       const amounts= $el.text()
        const prices = amounts.split(" ")
        sum = sum+Number(prices[1])
    })
    this.getTotals().then((element)=>{
        const TotalAmount= element.text()
        const Total = TotalAmount.split(" ")
        expect(sum).to.equal(Number(Total[1]))
    })
    }
    ContinueCheckout(){
        this.getSecondCheckout().click()
    }
    setDelivaryLocation(location){
        this.geDeliveryLocationBox().type(location)
    }
    setCountry(){
        this.getCountry().click()
    }
    agreeWithTermsAndCondtion(){
        this.getTermsAgreementCheckbox().click({force:true})
    }
   clickOnPurchaseButton(){
    this.getPurchaseButton().click()
   }
   ValidateSucessMessage(){
    this.getSuccessMsg().then((element)=>{
        const actualText = element.text()
        expect(actualText.includes("Success")).to.be.true
    }) 
}

}