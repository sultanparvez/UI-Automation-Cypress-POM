
 //  Object
const nameBox = 'form .form-group input[name="name"]'

const genderBox = '#exampleFormControlSelect1'

const twoWayDataBindings = ' div h4 input[name="name"]'

const entrepenurRadioButton = '#inlineRadio3'

const employeeRadioButton = '#inlineRadio2'

const shopButton = ' a[href="/angularpractice/shop"]'

class HomePageObjects{
   
    /**
     * Get Name Box Locator
     * @return {*} nameBox
     * @memberof HomePageObjects
     */
    getNameBox(){
        return cy.get(nameBox)
    }
    /**
     * Get Gender Checkbox Locator
     * @return {*} genderBox
     * @memberof HomePageObjects
     */
    getGenderBox(){
        return cy.get(genderBox)
    }
   /**
    * Get Two Way Data Bindings Locator
    * @return {*} twoWayDataBindings
    * @memberof HomePageObjects
    */
   getTwoWayDataBindings(){
        return cy.get(twoWayDataBindings)
    }
    /**
     * Get Entrepenur Radio Button Locator
     * @return {*} entrepenurRadioButton
     * @memberof HomePageObjects
     */
    getEntrepenurRadioButton(){
        return cy.get(entrepenurRadioButton)
    }
    /**
     *Get Employee Radio Button Locator
     * @return {*} employeeRadioButton
     * @memberof HomePageObjects
     */
    getEmployeeRadioButton(){
        return cy.get(employeeRadioButton)
    }
    /**
     * Get Shop Button Locator
     * @return {*} 
     * @memberof HomePageObjects
     */
    getShopButton(){
        return cy.get(shopButton)
    }

}
export default HomePageObjects;