// This will create a class that contains every function that will be used in Login Page
class LoginPage {
    // All parameters used by all functions in this class can be inputted in this file: 01. TestScenario_Login.cy

    // This script used to fill in Email or Username with parameter: email
    fillEmail(email){ 
        cy.get('input[data-type="email"]', {timeout: 3000}) // please adjust with the web selector
        .should('be.visible')
        .type(email)
    }
    // This script used to fill Password with parameter: password
    fillPassword(password){
        cy.get('input[data-type="password"]', {timeout: 3000}) // please adjust with the web selector
        .should('be.visible')
        .type(password)
    }
    // This script used to click Login button
    clickButton(){
        cy.get('button', {timeout: 3000}) // please adjust with the web selector
        .contains('Login')
        .should('be.visible').click() // 
    }
    // This script used to do assertion validation using parameter: assertion
    loginAssertion(assertion){
        cy.contains(assertion, {timeout: 3000}) // please adjust with the web selector
        .should('be.visible')
    }
}

// This code will be export the class so we can use all of its function
export default LoginPage

// After doing export, please go to: support/pages/commands.js