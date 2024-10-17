///<reference types="cypress-iframe"/>
import 'cypress-iframe'
import LogIn from '../pageObjects/logIn'

describe('Log In Regression', function(){

    before(function(){
        cy.fixture('logIn').then(function(data){

            this.data=data

        })

    })
/*
    afterEach(function () {
        const logIn = new LogIn();
    
        // Log out
        logIn.getHamburgerDropdown().click({force:true})
        logIn.getLogOutButton().click({force:true})
        
      });
    */

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

    
    
    it('Invalid log in credentials', function(){
        const logIn = new LogIn()

        cy.visit(Cypress.env("canLoginUrl"))

        logIn.getEmailField().type('emal@gmail.com')
        logIn.getPasswordField().type('Inga12345')
        logIn.getSignInButton().click() 
        //Login failed - Failed authentication, please try again.
        cy.get('.Toaster__AnimateContent-sc-10pk1v-0.feMjlG').should('not.be.visible').should('contain', "Login failed - Failed authentication, please try again.")
        

 
        
    })

    it('No Log In credentials', function(){
        const logIn = new LogIn()

        cy.visit(Cypress.env("canLoginUrl"))

       
        logIn.getSignInButton().click() 
       
        cy.get('.Toaster__AnimateContent-sc-10pk1v-0.feMjlG').should('not.be.visible')
        cy.get('div[class*="forms__FormError"]').eq(0).should('have.text', 'A username is required')
        cy.get('div[class*="forms__FormError"]').eq(1).should('have.text', 'A password is required')
        

 
        
    })

    it('Forgot Password', function(){
        const logIn = new LogIn()

        cy.visit(Cypress.env("canLoginUrl"))
        //Login failed - Failed authentication, please try again.
        cy.get('a[class*="ForgotPassword"]').click()
        cy.get('input[name="email"]').type('ibilyk@owlpracticesuite.com')
        cy.contains('button', 'Send Reset Email').click()
        cy.get('.Toaster__AnimateContent-sc-10pk1v-0.feMjlG').should('not.be.visible').should('contain', "Success")


 
        
    })
    
})