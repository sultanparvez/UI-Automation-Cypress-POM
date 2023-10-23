
 //  Object
const nameBox = 'form .form-group input[name="name"]'

const genderBox = '#exampleFormControlSelect1'

const twoWayDataBindings = ' div > h4 > input[name="name"]'

const entrepenurRadioButton = '#inlineRadio3'

const employeeRadioButton = '#inlineRadio2'

const shopButton = ' a[href="/angularpractice/shop"]'

class HomePageObjects{
   
//  Methods or Funtions
    getNameBox(){
        return cy.get(nameBox)
    }
    getGenderBox(){
        return cy.get(genderBox)
    }
   getTwoWayDataBindings(){
        return cy.get(twoWayDataBindings)
    }
    getEntrepenurRadioButton(){
        return cy.get(entrepenurRadioButton)
    }
    getEmployeeRadioButton(){
        return cy.get(employeeRadioButton)
    }
    getShopButton(){
        return cy.get(shopButton)
    }

}
export default HomePageObjects;