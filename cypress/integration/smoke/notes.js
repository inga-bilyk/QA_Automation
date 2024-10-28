///<reference types="cypress-iframe"/>
import 'cypress-iframe'
import CreateClient from '../pageObjects/createClient'
import LogIn from '../pageObjects/logIn'
import BookSession from '../pageObjects/bookSession'
import Notes from '../pageObjects/notes'
describe('Validate the notes can be created and signed', function(){

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



    it('Write and Sign a note', function(){
        const createClient = new CreateClient()
        const logIn = new LogIn()
        const bookSession = new BookSession()
        const notes = new Notes()

       
       cy.visit(Cypress.env('canLoginUrl'))


        logIn.getEmailField().type(this.data.email)
        logIn.getPasswordField().type(this.data.password)
        logIn.getSignInButton().contains('Sign In').click() 

        //logIn.getUserNameValidation().should('have.text', this.data.textValue)
        cy.wait(3000)
        
        bookSession.getDayViewCalendar().trigger('mouseover').click({force:true})
        
        
        
        bookSession.getSelectDateTime().click()
        
        
        bookSession.getClientNameField().type('Eva')
        bookSession.getSelectClient().contains('Eva Smiths').click()
        bookSession.getServiceDropdown().click()
        bookSession.getService().contains('90791 - Initial Assessment (Family)').click()
        bookSession.getCreateSessionButton().click()
        createClient.getToastMessage().should('be.visible').should('include.text', 'Created a client sesssion')
        cy.wait(3000)
        

        bookSession.getBookedSessionClick().click()

        notes.getCreateNoteButton().click()
       
       const iframeInput =  cy.get('iframe[class="cke_wysiwyg_frame cke_reset"]')
       .its('0.contentDocument.body')
       .should('be.visible')
       .then(cy.wrap)
       iframeInput.type('Testing notes')
       notes.getChooseTemplateDropdown().click()
       notes.getTemplateDropdownItems().contains('Treatment Plan').click()
       cy.wait(2000)
       notes.getTemplateSelectionModal().click()
       notes.getUseTemplateButton().click()
       
       notes.getTemplateLabels().should('be.visible')

       notes.getNotesWindowButtons().contains('Save').click()
       createClient.getToastMessage('Successfully Saved')
       cy.wait(2000)

       notes.getSignNote().click()
       notes.getButtonsAfterSignNote().should('have.length', 1)

       notes.getTemplateDropdownAfterSign().should('not.be.enabled')
       notes.getCommentsInputField().should('not.be.enabled')
       notes.getCloseNoteModalButton().click()
       bookSession.getBookedSessionClick().click()

       cy.wait(3000)

       cy.get(':nth-child(7) > .bp3-menu-item > .bp3-fill').should('have.text', 'Signed Note')
       
       // Deleting session
        
        bookSession.getMoreButton().click()
        
        cy.wait(3000)
        bookSession.getDeleteSessionButton().click()
        bookSession.getDialogDeleteSessionButton().click()
        createClient.getToastMessage().should('include.text', 'deleted')






        
        




        
       

    })

    
})