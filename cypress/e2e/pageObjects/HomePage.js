class HomePage{
    //  Object

    getNameBox(){
        return cy.get('form .form-group input[name="name"]')
    }
    getGenderBox(){
        return cy.get('#exampleFormControlSelect1')
    }
   getTwoWayDataBindings(){
        return cy.get(' div > h4 > input[name="name"]')
    }
    getEntrepenurRadioButton(){
        return cy.get('#inlineRadio3')
    }
    getEmployeeRadioButton(){
        return cy.get('#inlineRadio2')
    }
    getShopButton(){
        return cy.get(' a[href="/angularpractice/shop"]')
    }
    //  Methods or Funtions

    setName(name){
        this.getNameBox().type(name)
     }
     setGenderBox(gender){
        this.getGenderBox().select(gender)
     }
    assertTwoWayDataBindings(name){
        this.getTwoWayDataBindings().should('have.value',name)
    }
    assertMinLength(){
        this.getNameBox().should('have.attr','minlength','2')
    }
     disableEntrepenurRadioButton(){
        this.getEntrepenurRadioButton().should('be.disabled')
     }
    enableEntrepenurRadioButton(){
        this.getEmployeeRadioButton().should('be.enabled')
    }
    clickShopButton(){
        this.getShopButton().click()
    }

}
export default HomePage;