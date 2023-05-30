import HomePage from "../pageObjects/HomePage"

const homePage= new HomePage()

class testHomePage {
login(name,gender){
    homePage.setName(name);
    homePage.setGenderBox(gender);
    homePage.assertTwoWayDataBindings(name);
    homePage.assertMinLength();
    homePage.disableEntrepenurRadioButton();
    homePage.enableEntrepenurRadioButton();
    homePage.clickShopButton(); 
    }     
}
export default testHomePage;