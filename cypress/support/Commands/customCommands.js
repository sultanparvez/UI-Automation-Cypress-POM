require('@reportportal/agent-js-cypress/lib/commands/reportPortalCommands');
/**
 * Select Product
 * @param {String} ProductName
 */
Cypress.Commands.add('selectProduct', (ProductName) => {  
    cy.get('h4.card-title').each(($el,index,$list)=>{
        if( $el.text().includes(ProductName)){
         cy.get('button.btn.btn-info').eq(index).click()
        }
     })
    })
/**
 * Define the step
 * @param {String} name
 * @param {String} message
 */
Cypress.Commands.add('logStep', (name,message) => { 
    Cypress.log({
           name: name,
           displayName: '*** '+name+' ***',
           message: message,
    })
    cy.log(name+": "+message)
})

/**
 * Wait till the element is visible
 * @param {String} element
 */
Cypress.Commands.add('waitTillVisible', (element) => {
    cy.get(element, { timeout: 10000 })
           .should("be.visible")
})
/**
 * Wait till the element not visible anymore
 * @param {String} element
 */
Cypress.Commands.add('waitTillNotVisible', (element) => {
    cy.get(element, { timeout: 10000 })
           .should("not.be.visible")
})
/**
 * Steps for reportportal and mochawesome reports
 * @param {String} testname
 * @param {String} message
 */
Cypress.Commands.add('testCase', (testName, message) => {
    cy.setTestCaseId(testName);
    cy.setTestDescription(message);
    cy.log(message)
    cy.once('test:before:run', (test) => addContext({ test }, testName + message));
})


/**
 * Success steps for reportportal and mochawesome reports
 * @param {String} testname
 * @param {String} message
 */
Cypress.Commands.add('casePassed', (testName, message) => {
    cy.setTestCaseId(testName);
    cy.setStatusPassed();
    cy.log(message)
    cy.once('test:after:run', (test) => addContext({ test }, testName + message));
})

/**
 * To handle uncaught exceptions
 */
cy.on('uncaught:exception', (err, runnable) => {
    expect(err.message).to.include('of undefined')
    done()
    return false
});
