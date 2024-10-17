///<reference types="cypress-iframe"/>
import 'cypress-iframe'
import CreateClient from '../pageObjects/createClient'
import LogIn from '../pageObjects/logIn'
describe('Create a new client from a clinic', function(){

    before(function(){
        cy.fixture('logIn').then(function(data){

            this.data=data

        })
        cy.fixture('createClient').then(function(data1){

            this.data1=data1

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



    it('Create a new client', function(){
        const createClient = new CreateClient()
        const logIn = new LogIn()

       
       cy.visit(Cypress.env('canLoginUrl'))
       


        logIn.getEmailField().type(this.data.email)
        logIn.getPasswordField().type(this.data.password)
        logIn.getSignInButton().contains('Sign In').click() 

        logIn.getUserNameValidation().should('have.text', this.data.textValue)
        
        createClient.getClientsTab().contains('Clients').click()

        cy.contains('Smiths, Eva').click()
        


    })

    
})