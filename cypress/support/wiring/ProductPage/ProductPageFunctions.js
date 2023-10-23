import ProductPageObjects from "../../pageObjects/ProductPage/ProductPageObjects";

const productPageObjects = new ProductPageObjects
class ProductPage{
ProductPage(){

}
clickCheckout(){
    productPageObjects.getCheckoutButton().click()
    return this;
    }   
    ValidateTotalPriceIsCorrect(){
    var sum = 0
    productPageObjects.getPriceOfAllProduct().each(($el,index,$list)=>{
       const amounts= $el.text()
        const prices = amounts.split(" ")
        sum = sum+Number(prices[1])
    
    })
    productPageObjects.getTotals().then((element)=>{
        const TotalAmount= element.text()
        const Total = TotalAmount.split(" ")
        expect(sum).to.equal(Number(Total[1]))
    })
    return this;
    }
    ContinueCheckout(){
        productPageObjects.getSecondCheckout().click()
        return this;
    }
agreeWithTermsAndCondtion(){
    productPageObjects.getTermsAgreementCheckbox().click({force:true})
    return this;
}
clickOnPurchaseButton(){
productPageObjects.getPurchaseButton().click()
return this;
}
ValidateSucessMessage(){
productPageObjects.getSuccessMsg().then((element)=>{
    const actualText = element.text()
    expect(actualText.includes("Success")).to.be.true
}) 
return this;
}
selectProduct(products){
    products.forEach(function(product){
        cy.selectProduct(product)
        }) 
        return this;
}

setDelivaryLocation(location){
    productPageObjects.getDeliveryLocationBox().type(location)
    return this;
}
setCountry(){
    productPageObjects.getCountry().click()
    return this;
}

}
export default ProductPage