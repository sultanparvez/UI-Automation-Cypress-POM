import HomePage from "../pageObjects/HomePage"

const homePage= new HomePage()

class HomePageModel {
 setName(name){
    homePage.getNameBox().type(name)
 }
 setGenderBox(gender){
    homePage.getGenderBox().select(gender)
 }
assertTwoWayDataBindings(name){
    homePage.getTwoWayDataBindings().should('have.value',name)
}
assertMinLength(){
  homePage.getNameBox().should('have.attr','minlength','2')
}
 disableEntrepenurRadioButton(){
    homePage.getEntrepenurRadioButton().should('be.disabled')
 }
enableEntrepenurRadioButton(){
    homePage.getEmployeeRadioButton().should('be.enabled')
}
clickShopButton(){
    homePage.getShopButton().click()
}

}
export default HomePageModel;