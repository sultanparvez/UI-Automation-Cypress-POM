//  Object
const checkoutButton = '#navbarResponsive .navbar-nav .nav-item .nav-link'
const secondCheckout = '.btn.btn-success'
const deliveryLocationBox ='input[id="country"]'
const country = '.suggestions > ul > li > a'
const termsAgreementCheckbox = 'div div #checkbox2'
const purchaseButton = '.ng-untouched > .btn'
const SuccessMsg = '.alert'
const priceOfAllProduct = 'tr > td:nth-child(4) > strong'
const totals = ' tr > td > h3 > strong'

export class ProductPage {


    getCheckoutButton(){
        return cy.get(checkoutButton)
    }
    getSecondCheckout(){
        return cy.get(secondCheckout)
    }
    getDeliveryLocationBox(){
        return cy.get(deliveryLocationBox)
    }
    getCountry(){
        return cy.get(country)
    }
    getTermsAgreementCheckbox(){
        return cy.get(termsAgreementCheckbox)
    }
    getPurchaseButton(){
        return cy.get(purchaseButton)
    }
    getSuccessMsg(){
        return cy.get(SuccessMsg)
    }
    getPriceOfAllProduct(){
        return cy.get( priceOfAllProduct)
    }
    getTotals(){
        return cy.get(totals)
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
        this.getDeliveryLocationBox().type(location)
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