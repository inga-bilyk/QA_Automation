///<reference types="cypress-iframe"/>
import 'cypress-iframe'
import CreateClient from '../pageObjects/createClient'
import LogIn from '../pageObjects/logIn'
import BookSession from '../pageObjects/bookSession'
import GenerateInvoice from '../pageObjects/generateInvoice'
import ClinicGeneral from '../pageObjects/clinicGeneral'
import ClientProfile from '../pageObjects/clientProfile'
describe('Generate/Delete Invoice, Receipt', function(){

    before(function(){
        cy.fixture('logIn').then(function(data){

            this.data=data

        })
        cy.fixture('createClient').then(function(data1){

            this.data1=data1

        })

        
        cy.fixture('clientProfile').then(function(clientdata){
            this.clientdata = clientdata
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



    it('Validate Receipts and Invoices can be generated and deleted', function(){
        const createClient = new CreateClient()
        const logIn = new LogIn()
        const bookSession = new BookSession()
        const generateInvoice = new GenerateInvoice()
        const clinicGeneral = new ClinicGeneral()
        const clientProfile = new ClientProfile()

       
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

       //Set to manual payment

       clinicGeneral.getSelectClientFromClientTab().click() 
        //validate all the tabs are present in Navigate and Actions
        clientProfile.getClientMenuItems().should('have.text', this.clientdata.clientMenu)
        clientProfile.getClientMenuItems().each(($el, index, $list)=>{
            if($el.text()=== this.clientdata.contactClinical)
            {
                $el.click()
            }
        })
        clientProfile.getClientContacMenuButtons().should('have.length', '6')

         //Account Details

         clientProfile.getClientContacMenuButtons().each(($el, index, $list)=>{
            const clientDetails = $el.text()
            if(clientDetails.includes(this.clientdata.accountDetails))
            {
                $el.click()
            }
        })
        clientProfile.getEditButton().click()

        clientProfile.getInvoiceCreation().click()
        clientProfile.getOption().contains('Create Manually').click()
        clientProfile.getInvoiceSendingDropdown().click()
        clientProfile.getOption().contains('Send Manually').click()
        clientProfile.getReceiptSendingDropdown().click()
        clientProfile.getOption().contains('Send Manually').click()
        clientProfile.getPaymentProcessingDropdown().click()
        clientProfile.getOption().contains('Process Manually').click({force:true})
        cy.wait(3000)
        clientProfile.getEditSaveButton().click()
        createClient.getToastMessage().should('have.text', "Saved client account settings")

        //Validate it's manual now
        clientProfile.getInvoiceCreationSelected().should('have.text', 'Create Manually')
        clientProfile.getInvoiceSendingSelected().should('have.text', 'Send Manually')
        clientProfile.getReceiptSendingSelected().should('have.text', 'Send Manually')
        clientProfile.getPaymentProcessSelected().should('have.text', 'Process Manually')




       


    


       
        
       createClient.getClientsTab().contains('Calendar').click()
        
       cy.wait(3000)
        bookSession.getDayViewCalendar().trigger('mouseover').click({force:true})
        
        cy.wait(3000)
        
        bookSession.getSelectDateTime().click()
        
        
        bookSession.getClientNameField().type('Eva')
        bookSession.getSelectClient().contains('Eva Smiths').click()
        bookSession.getServiceDropdown().click()
        bookSession.getService().contains('90791 - Initial Assessment (Family)').click()
        bookSession.getCreateSessionButton().click()
        createClient.getToastMessage().should('be.visible').should('include.text', 'Created a client sesssion')
        cy.wait(2000)

        bookSession.getBookedSessionClick().click()



        generateInvoice.getSetAttendedSession().click({force:true}) //set a session as attended
        
        cy.wait(3000)

        clinicGeneral.getClinicTabs().contains('Clients').click()
        
        cy.wait(3000)
        clinicGeneral.getSelectClientFromClientTab().click() //select a client from clients
        generateInvoice.getCreateInvoiceTab().click() //click on Create invoice
        generateInvoice.getCreateInvoiceButton().click() //click on create invoice button 
        generateInvoice.getCloseCreateInvoiceModal().click()

        cy.wait(3000)

        
        generateInvoice.getRecordPaymentTab().click() //click on record payment
        generateInvoice.getPaymentMethodDropdown().click()
        generateInvoice.getPayment().contains('Debit Card').click()
        generateInvoice.getPaymentConfirmationNumberField().type('1234567')
        generateInvoice.getRecordPaymentButton().click({force:true})
        generateInvoice.getCloseRecordPaymentDialog().click()
        cy.wait(2000)
        generateInvoice.getReceiptModal().should('be.visible')
        generateInvoice.getCloseReceiptModal().click()



        generateInvoice.getFinancesTab().click()  //navigate to finances
        
        generateInvoice.getReceiptStatus().should('have.text', 'SUCCESS')
        generateInvoice.getCheckReceiptCheckbox().click({force:true}) //check the receipt
        generateInvoice.getDeleteReceiptButton().as('Delete').click() //delete receipt
        cy.get('@Delete').click({force:true})
        cy.wait(2000)
        //generateInvoice.getDeleteReceiptConfirmModal().should('be.visible')
        generateInvoice.getConfirmDeleteReceiptButton().click() //delete receipt from Confirm modal

        createClient.getToastMessage().should('include.text', 'deleted')

        //add assertion for successfull delete
        
        generateInvoice.getInvoicesTab().click() //get invoices tab
        cy.wait(2000)
        generateInvoice.getInvoiceCheckbox().click({force:true}) //check the invoice
        cy.wait(2000)
        generateInvoice.getDeleteInvoiceButton().as('Delete').click()//delete invoice
        cy.get('@Delete').click({force:true})
        generateInvoice.getConfirmDeleteInvoiceButton().click() //confirm delete invoice
        createClient.getToastMessage().should('include.text', 'deleted')


        //delete the session
        clinicGeneral.getClinicTabs().contains('Calendar').click()
        

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