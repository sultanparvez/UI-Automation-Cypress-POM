import HomePage from "../pageObjects/HomePage"

const homePage= new HomePage()

class testHomePage {
login(name,gender){
    homePage.setName(name)
            .setGenderBox(gender)
            .assertTwoWayDataBindings(name)
            .assertMinLength()
            .disableEntrepenurRadioButton()
            .enableEntrepenurRadioButton()
            .clickShopButton()
    }     
}
export default testHomePage;