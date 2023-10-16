import ReusableMethods from "../pageObjects/EcommerceCommon/ReusableMethod"
import HomePage from "../pageObjects/HomePage/HomePage"
import { ProductPage } from "../pageObjects/ProductPage/ProductPage"

const homePage = new HomePage()
const productPage = new ProductPage()
const reusableMethods = new ReusableMethods()


describe("E-Shopping",()=>{
    let name = "ProtoCustomer"+reusableMethods.generateDateTimeString()
    const genderArray = ["Male","Female"]
    const countryArray = ["Bangladesh", "United States"]
    const productNames = ["Blackberry","Nokia Edge"]

    before(()=>{
        cy.visit("/")
    })

    it("login Validation",()=>{  
    homePage.setName(name)
            .setGenderBox(genderArray[Math.floor(Math.random()*2)])
            .assertTwoWayDataBindings(name)
            .assertMinLength()
            .disableEntrepenurRadioButton()
            .enableEntrepenurRadioButton()
            .clickShopButton()
    })
    it("Validate able to select products",()=>{  
        productPage.selectProduct(productNames)
                .clickCheckout()
                .ValidateTotalPriceIsCorrect()
                .ContinueCheckout()
                .setDelivaryLocation(countryArray[Math.floor(Math.random()*2)])
                .setCountry()
                .agreeWithTermsAndCondtion()
                .clickOnPurchaseButton()
                .ValidateSucessMessage()  
    })
})
   
