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
    
    afterEach(function () {
        const logIn = new LogIn();
    
        // Log out
        logIn.getHamburgerDropdown().click({force:true})
        logIn.getLogOutButton().click({force:true})
        
      });
      

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
        

        createClient.getAddClientButton().click()
        createClient.getClientFirstName().type(this.data1.firstName)
        createClient.getClientLastName().type(this.data1.lastName)
       
       
       createClient.getClientAddressField().type(this.data1.address)

       createClient.getClientCity().type(this.data1.city)
       createClient.getClientZipCodeField().type(this.data1.zip)
       createClient.getCreateClientButton().click()
       createClient.getToastMessage().should('not.be.visible').should('have.text', this.data1.toastMessage)
       


createClient.getCreatedClient()
.should('have.length', 2)
      createClient.getCreatedClient().eq(1)
      .scrollIntoView() 
      .should('be.visible')
      createClient.getCreatedClientCheckbox().click()
      createClient.getDeleteClientButton().click()
      createClient.getDeleteSelectedClientButton().click()
      cy.wait(5000)
      createClient.getConfirmDeleteClientButton().click()
      createClient.getToastMessage().should('not.be.visible').should('have.text', this.data1.deleteClientToast)

      
      

    })

    
})