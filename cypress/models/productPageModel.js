import {ProductPage} from "../pageObjects/ProductPage"

const productPage= new ProductPage();

class productPageModel{
    selectProduct(products){
        products.forEach(function(product){
            cy.selectProduct(product)
            }) 
    }
    clickCheckout(){
    productPage.getCheckoutButton().click()
    }   
    ValidateTotalPriceIsCorrect(){
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
    }
    ContinueCheckout(){
        productPage.getSecondCheckout().click()
    }
    setDelivaryLocation(location){
        productPage.geDeliveryLocationBox().type(location)
    }
    setCountry(){
        productPage.getCountry().click()
    }
    agreeWithTermsAndCondtion(){
        productPage.getTermsAgreementCheckbox().click({force:true})
    }
   clickOnPurchaseButton(){
    productPage.getPurchaseButton().click()
   }
   ValidateSucessMessage(){
    productPage.getSuccessMsg().then((element)=>{
        const actualText = element.text()
        expect(actualText.includes("Success")).to.be.true
    }) 
}

}

export default productPageModel;