import ProductPageObjects from "../../pageObjects/ProductPage/ProductPageObjects";

const productPageObjects = new ProductPageObjects();
class ProductPage {
  ProductPage() {}
  /**
   * Click On Checkout Button
   * @return {*} ProductPage
   * @memberof ProductPage
   */
  clickCheckout() {
    productPageObjects.getCheckoutButton().click();
    return this;
  }
  /**
   * Validate Total Price Is Correct
   * @return {*}  ProductPage
   * @memberof ProductPage
   */
  ValidateTotalPriceIsCorrect() {
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
   * @return {*} ProductPage
   * @memberof ProductPage
   */
  ContinueCheckout() {
    productPageObjects.getSecondCheckout().click();
    return this;
  }
  /**
   * Check Agree With Terms And Conditon
   * @return {*} ProductPage
   * @memberof ProductPage
   */
  agreeWithTermsAndCondtion() {
    productPageObjects.getTermsAgreementCheckbox().click({ force: true });
    return this;
  }
  /**
   * Click On Purchase Button
   * @return {*} ProductPage
   * @memberof ProductPage
   */
  clickOnPurchaseButton() {
    productPageObjects.getPurchaseButton().click();
    return this;
  }
  /**
   * Validate Sucess Message
   * @return {*} ProductPage
   * @memberof ProductPage
   */
  ValidateSucessMessage() {
    productPageObjects.getSuccessMsg().then((element) => {
      const actualText = element.text();
      expect(actualText.includes("Success")).to.be.true;
    });
    return this;
  }
  /**
   * Select Multiple Product
   * @param {*} products
   * @return {*} ProductPage
   * @memberof ProductPage
   */
  selectProduct(products) {
    products.forEach(function (product) {
      cy.selectProduct(product);
    });
    return this;
  }
  /**
   * Set Delivary Location
   * @param {*} location
   * @return {*} ProductPage
   * @memberof ProductPage
   */
  setDelivaryLocation(location) {
    productPageObjects.getDeliveryLocationBox().type(location);
    return this;
  }
  /**
   * Set Country
   * @return {*} 
   * @memberof ProductPage
   */
  setCountry() {
    productPageObjects.getCountry().click();
    return this;
  }
}
export default ProductPage;
