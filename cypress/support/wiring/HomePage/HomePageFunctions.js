import HomePageObjects from "../../pageObjects/HomePage/HomePageObjects"

const homePageobjects = new HomePageObjects
class HomePage{
    HomePage(){
    }
/**
 * Assert Two Way Data Bindings
 * @param {String} name
 * @return HomePage
 * @memberof HomePage
 */
assertTwoWayDataBindings(name){
    cy.logStep("Assert Two Way Data Bindings","Asserting Two Way Data Bindings To Have Value :'"+name+"'")
    homePageobjects.getTwoWayDataBindings().should('have.value',name)
    return this
}
/**
 * Assert Minimum Length
 * @return HomePage
 * @memberof HomePage
 */
assertMinLength(){
    cy.logStep("Assert Min Length","Asserting element have 'minlength' attribute and the value is '2'")
    homePageobjects.getNameBox().should('have.attr','minlength','2')
    return this
}
/**
 * Disable Entrepenur Radio Button 
 * @return HomePage
 * @memberof HomePage
 */
disableEntrepenurRadioButton(){
    cy.logStep("Disable Entrepenur Radio Button","Disabling Entrepenur Radio Button")
    homePageobjects.getEntrepenurRadioButton().should('be.disabled')
    return this
 }
/**
 * Enable Entrepenur Radio Button
 * @return HomePage
 * @memberof HomePage
 */
enableEntrepenurRadioButton(){
    cy.logStep("Enable Entrepenur Radio Button","Enabling Entrepenur Radio Button")
    homePageobjects.getEmployeeRadioButton().should('be.enabled')
    return this
}
/**
 * Click Shop Button
 * @return HomePage
 * @memberof HomePage
 */
clickShopButton(){
    cy.logStep("Click Shop Button","Clicking Shop Button")
    homePageobjects.getShopButton().click()
    return this
}
/**
 * Set Name
 * @param {String} name
 * @return HomePage
 * @memberof HomePage
 */
setName(name){
    cy.logStep("Set Name","Seting Name to :'"+name+"'")
    homePageobjects.getNameBox().type(name)
    return this
 }
 /**
  * Set Gender 
  * @param {String} gender
  * @return HomePage
  * @memberof HomePage
  */
 setGenderBox(gender){
    cy.logStep("Set Gender","Set Gender to :'"+gender+"'")
    homePageobjects.getGenderBox().select(gender)
    return this
 }
}
export default HomePage;