///<reference types="cypress-iframe"/>
import 'cypress-iframe'
import CreateClient from '../pageObjects/createClient'
import LogIn from '../pageObjects/logIn'
import BookSession from '../pageObjects/bookSession'
describe('Book, Edit and Delete a session', function(){

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



    it('Book/Edit/Delete a new session', function(){
        const createClient = new CreateClient()
        const logIn = new LogIn()
        const bookSession = new BookSession()

       
       cy.visit(Cypress.env('canLoginUrl'))


        logIn.getEmailField().type(this.data.email)
        logIn.getPasswordField().type(this.data.password)
        logIn.getSignInButton().contains('Sign In').click() 

        //logIn.getUserNameValidation().should('have.text', this.data.textValue)
        cy.wait(3000)

        //New block for client creation


        createClient.getClientsTab().contains('Clients').click()
        

        createClient.getAddClientButton().click()
        createClient.getClientFirstName().type(this.data1.firstName)
        createClient.getClientLastName().type(this.data1.lastName)
       
       
       createClient.getClientAddressField().type(this.data1.address)

       createClient.getClientCity().type(this.data1.city)
       createClient.getClientZipCodeField().type(this.data1.zip)
       createClient.getCreateClientButton().click()
       createClient.getToastMessage().should('not.be.visible').should('have.text', this.data1.toastMessage)


       createClient.getClientsTab().contains('Calendar').click()


        ////////////////////////////////
        bookSession.getDayViewCalendar().trigger('mouseover').click({force:true})
        
        cy.wait(3000)
        
        
        bookSession.getSelectDateTime().click()
        
        
        bookSession.getClientNameField().type('Eva')
        bookSession.getSelectClient().contains('Eva Smiths').click()
        bookSession.getServiceDropdown().click()
        bookSession.getService().contains('90791 - Initial Assessment (Family)').click()
        bookSession.getCreateSessionButton().click()
        createClient.getToastMessage().should('be.visible').should('include.text', 'Created a client sesssion')
        cy.wait(3000)

        bookSession.getBookedSessionClick().click()
        bookSession.getMoreButton().click()

        //Edit a session
        bookSession.getAmountChargedField().should('have.value', '100.00')
        bookSession.getDurationField().should('have.value', '60')
        bookSession.getServiceDropdown().click()
        
        bookSession.getService().contains('90837 - Individual Psychotherapy, 60 mins (Individual)').click()
        bookSession.getAmountChargedField().should('have.value', '100.00')
        bookSession.getUpdateSessionButton().click()
        //bookSession.getUpdateDialogConfirmButton().click()   //no confirm dialog
        createClient.getToastMessage().should('be.visible').should('include.text', 'Successfully updated session')

        //Deleting session
        cy.wait(2000)
        bookSession.getBookedSessionClick().click()
        bookSession.getMoreButton().click()
        
        cy.wait(3000)
        bookSession.getDeleteSessionButton().click()
        bookSession.getDialogDeleteSessionButton().click()
        createClient.getToastMessage().should('include.text', 'deleted')


        //Delete a client

        createClient.getClientsTab().contains('Clients').click()
        cy.wait(3000)

      createClient.getCreatedClientCheckbox().click()
      createClient.getDeleteClientButton().click()
      createClient.getDeleteSelectedClientButton().click()
      cy.wait(5000)
      createClient.getConfirmDeleteClientButton().click()
      createClient.getToastMessage().should('not.be.visible').should('have.text', this.data1.deleteClientToast)

        
      

    })

    
})