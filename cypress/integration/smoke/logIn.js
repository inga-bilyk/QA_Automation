///<reference types="cypress-iframe"/>
import 'cypress-iframe'
import LogIn from '../pageObjects/logIn'

describe('User can log in to clinic', function(){

    before(function(){
        cy.fixture('logIn').then(function(data){

            this.data=data

        })

    })

    afterEach(function () {
        const logIn = new LogIn();
    
        // Log out
        logIn.getHamburgerDropdown().click({force:true})
        logIn.getLogOutButton().click({force:true})
        
      });
    

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

    it('Log in to the clinic', function(){
        const logIn = new LogIn()

        cy.visit(Cypress.env("canLoginUrl"))

        logIn.getEmailField().type(this.data.email)
        logIn.getPasswordField().type(this.data.password)
        logIn.getSignInButton().click() 
        logIn.getUserNameValidation().should('have.text', this.data.textValue)

 
        
    })

    
})