import HomePageObjects from "../../pageObjects/HomePage/HomePageObjects"

const homePageobjects = new HomePageObjects
class HomePage{
    HomePage(){

    }
assertTwoWayDataBindings(name){
    homePageobjects.getTwoWayDataBindings().should('have.value',name)
    return this
}
assertMinLength(){
    homePageobjects.getNameBox().should('have.attr','minlength','2')
    return this
}
 disableEntrepenurRadioButton(){
    homePageobjects.getEntrepenurRadioButton().should('be.disabled')
    return this
 }
enableEntrepenurRadioButton(){
    homePageobjects.getEmployeeRadioButton().should('be.enabled')
    return this
}
clickShopButton(){
    homePageobjects.getShopButton().click()
    return this
}
setName(name){
    homePageobjects.getNameBox().type(name)
    return this
 }
 setGenderBox(gender){
    homePageobjects.getGenderBox().select(gender)
    return this
 }
}
export default HomePage;