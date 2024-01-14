import HomePageObjects from "../../pageObjects/HomePage/HomePageObjects"

const homePageobjects = new HomePageObjects
class HomePage{
    HomePage(){
    }
/**
 * Assert Two Way Data Bindings
 * @param {*} name
 * @return {*} HomePage
 * @memberof HomePage
 */
assertTwoWayDataBindings(name){
    homePageobjects.getTwoWayDataBindings().should('have.value',name)
    return this
}
/**
 * Assert Minimum Length
 * @return {*} HomePage
 * @memberof HomePage
 */
assertMinLength(){
    homePageobjects.getNameBox().should('have.attr','minlength','2')
    return this
}
/**
 * Disable Entrepenur Radio Button 
 * @return {*} HomePage
 * @memberof HomePage
 */
disableEntrepenurRadioButton(){
    homePageobjects.getEntrepenurRadioButton().should('be.disabled')
    return this
 }
/**
 * Enable Entrepenur Radio Button
 * @return {*} HomePage
 * @memberof HomePage
 */
enableEntrepenurRadioButton(){
    homePageobjects.getEmployeeRadioButton().should('be.enabled')
    return this
}
/**
 * Click Shop Button
 * @return {*} HomePage
 * @memberof HomePage
 */
clickShopButton(){
    homePageobjects.getShopButton().click()
    return this
}
/**
 * Set Name
 * @param {*} name
 * @return {*} HomePage
 * @memberof HomePage
 */
setName(name){
    homePageobjects.getNameBox().type(name)
    return this
 }
 /**
  * Set Gender 
  * @param {*} gender
  * @return {*} HomePage
  * @memberof HomePage
  */
 setGenderBox(gender){
    homePageobjects.getGenderBox().select(gender)
    return this
 }
}
export default HomePage;