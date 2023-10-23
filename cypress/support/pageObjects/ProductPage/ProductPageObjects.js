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

class ProductPageObjects {


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

}
export default ProductPageObjects;