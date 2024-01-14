//  Object
const checkoutButton = '#navbarResponsive .navbar-nav .nav-item .nav-link'
const secondCheckout = '.btn.btn-success'
const deliveryLocationBox ='input[id="country"]'
const country = '.suggestions ul li a'
const termsAgreementCheckbox = 'div div #checkbox2'
const purchaseButton = '.ng-untouched .btn'
const successMsg = '.alert'
const priceOfAllProduct = 'tr td h3 Strong'
const totals = ' tr  td h3 strong'

class ProductPageObjects {

    /**
     * Get Checkout Button
     * @return {*} checkoutButton
     * @memberof ProductPageObjects
     */
    getCheckoutButton(){
        return cy.get(checkoutButton)
    }
    /**
     * Get Second Checkout 
     * @return {*} secondCheckout
     * @memberof ProductPageObjects
     */
    getSecondCheckout(){
        return cy.get(secondCheckout)
    }
    /**
     * Get Delivary Location Box
     * @return {*} delivaryLocationBox
     * @memberof ProductPageObjects
     */
    getDeliveryLocationBox(){
        return cy.get(deliveryLocationBox)
    }
    /**
     * Get Country Location 
     * @return {*} country 
     * @memberof ProductPageObjects
     */
    getCountry(){
        return cy.get(country)
    }
    /**
     * Get Terms Agreement Checkbox 
     * @return {*} termsAgreementCheckbox
     * @memberof ProductPageObjects
     */
    getTermsAgreementCheckbox(){
        return cy.get(termsAgreementCheckbox)
    }
    /**
     * Get Purchase Button Locator
     * @return {*} purchaseButton
     * @memberof ProductPageObjects
     */
    getPurchaseButton(){
        return cy.get(purchaseButton)
    }
    /**
     * Get Success Meassage Locator
     * @return {*} successMsg
     * @memberof ProductPageObjects
     */
    getSuccessMsg(){
        return cy.get(successMsg)
    }
    /**
     * Get Price Of All Product Locator
     * @return {*} priceOfAllProduct
     * @memberof ProductPageObjects
     */
    getPriceOfAllProduct(){
        return cy.get( priceOfAllProduct)
    }
    /**
     * Get Totals Locator
     * @return {*} totals
     * @memberof ProductPageObjects
     */
    getTotals(){
        return cy.get(totals)
    }

}
export default ProductPageObjects;