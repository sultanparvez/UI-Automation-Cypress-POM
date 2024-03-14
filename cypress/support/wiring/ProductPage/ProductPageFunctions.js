import ProductPageObjects from "../../pageObjects/ProductPage/ProductPageObjects";

const productPageObjects = new ProductPageObjects();
class ProductPage {
  ProductPage() {}
  /**
   * Click On Checkout Button
   * @return ProductPage
   * @memberof ProductPage
   */
  clickCheckout() {
    cy.logStep("Click On Checkout Button","Clicking On Checkout Button")
    productPageObjects.getCheckoutButton().click();
    return this;
  }
  /**
   * Validate Total Price Is Correct
   * @return  ProductPage
   * @memberof ProductPage
   */
  ValidateTotalPriceIsCorrect() {
    cy.logStep("Validate Total Price Is Correct","Validating Total Price Is Correct")
    var sum = 0;
    productPageObjects.getPriceOfAllProduct().each(($el, index, $list) => {
      const amounts = $el.text();
      const prices = amounts.split(" ");
      sum = sum + Number(prices[1]);
    });
    productPageObjects.getTotals().then((element) => {
      const TotalAmount = element.text();
      const Total = TotalAmount.split(" ");
      expect(sum).to.equal(Number(Total[1]));
    });
    return this;
  }
  /**
   * Click On Continue Checkout
   * @return ProductPage
   * @memberof ProductPage
   */
  ContinueCheckout() {
    cy.logStep("Click On Continue Checkout","Clicking On Continue Checkout")
    productPageObjects.getSecondCheckout().click();
    return this;
  }
  /**
   * Check Agree With Terms And Conditon
   * @return ProductPage
   * @memberof ProductPage
   */
  agreeWithTermsAndCondtion() {
    cy.logStep("Check Agree With Terms And Conditon","Checking Agree With Terms And Conditon")
    productPageObjects.getTermsAgreementCheckbox().click({ force: true });
    return this;
  }
  /**
   * Click On Purchase Button
   * @return ProductPage
   * @memberof ProductPage
   */
  clickOnPurchaseButton() {
    cy.logStep("Click On Purchase Button","Clicking On Purchase Button")
    productPageObjects.getPurchaseButton().click();
    return this;
  }
  /**
   * Validate Sucess Message
   * @return ProductPage
   * @memberof ProductPage
   */
  ValidateSucessMessage() {
    cy.logStep("Validate Sucess Message","Validating Sucess Message")
    productPageObjects.getSuccessMsg().then((element) => {
      const actualText = element.text();
      expect(actualText.includes("Success")).to.be.true;
    });
    return this;
  }
  /**
   * Select Multiple Product
   * @param {String} products
   * @return ProductPage
   * @memberof ProductPage
   */
  selectProduct(products) {
    cy.logStep("Select Multiple Product","Selecting Multiple Products :'"+products+"'")
    products.forEach(function (product) {
      cy.selectProduct(product);
    });
    return this;
  }
  /**
   * Set Delivary Location
   * @param {String} location
   * @return ProductPage
   * @memberof ProductPage
   */
  setDelivaryLocation(location) {
    cy.logStep("Set Delivary Location","Setting Up Delivary Location To :'"+location+"'")
    productPageObjects.getDeliveryLocationBox().type(location);
    return this;
  }
  /**
   * Set Country
   * @return ProductPage
   * @memberof ProductPage
   */
  setCountry() {
    cy.logStep("Set Country","Seting Country")
    productPageObjects.getCountry().click();
    return this;
  }
}
export default ProductPage;
