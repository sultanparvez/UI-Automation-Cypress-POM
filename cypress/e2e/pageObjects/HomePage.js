
 //  Object
const nameBox = 'form .form-group input[name="name"]'

const genderBox = '#exampleFormControlSelect1'

const twoWayDataBindings = ' div > h4 > input[name="name"]'

const entrepenurRadioButton = '#inlineRadio3'

const employeeRadioButton = '#inlineRadio2'

const shopButton = ' a[href="/angularpractice/shop"]'

class HomePage{
   
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
 

    setName(name){
        this.getNameBox().type(name)
        return this
     }
     setGenderBox(gender){
        this.getGenderBox().select(gender)
        return this
     }
    assertTwoWayDataBindings(name){
        this.getTwoWayDataBindings().should('have.value',name)
        return this
    }
    assertMinLength(){
        this.getNameBox().should('have.attr','minlength','2')
        return this
    }
     disableEntrepenurRadioButton(){
        this.getEntrepenurRadioButton().should('be.disabled')
        return this
     }
    enableEntrepenurRadioButton(){
        this.getEmployeeRadioButton().should('be.enabled')
        return this
    }
    clickShopButton(){
        this.getShopButton().click()
        return this
    }

}
export default HomePage;