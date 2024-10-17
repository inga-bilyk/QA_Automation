///<reference types="cypress-iframe"/>
import 'cypress-iframe'
import CreateClient from '../pageObjects/createClient'
import LogIn from '../pageObjects/logIn'
import ClinicGeneral from '../pageObjects/clinicGeneral'
import ClientProfile from '../pageObjects/clientProfile'
describe('Create a new client from a clinic', function(){

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



    it('Create a new client', function(){
        const createClient = new CreateClient()
        const logIn = new LogIn()
        const clinicGeneral = new ClinicGeneral()
        const clientProfile = new ClientProfile()

       
       cy.visit(Cypress.env('canLoginUrl'))
       


        logIn.getEmailField().type(this.data.email)
        logIn.getPasswordField().type(this.data.password)
        logIn.getSignInButton().contains('Sign In').click() 

        logIn.getUserNameValidation().should('have.text', this.data.textValue)
        createClient.getClientsTab().each(($el, index, $list)=>{
            if($el.text()==="Clients")
            {
                $el.click()
            }

            
        })

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

        
        //Contact Details

        clientProfile.getEditButton().click()
        
        createClient.getClientPronouce().type('Eva')
        createClient.getClientPronouce().clear()
        clientProfile.getEditSaveButton().click()
        cy.wait(3000)
        createClient.getToastMessage().should('be.visible').should('have.text', this.clientdata.toastSavedClientContact)



        //Clinical Details
        clientProfile.getClientContacMenuButtons().each(($el, index, $list)=>{
            const clientDetails = $el.text()
            if(clientDetails.includes(this.clientdata.clinicalDetails))
            {
                $el.click()
            }

        })
        clientProfile.getEditButton().click()
        clientProfile.getClinicalDetailsWaitlistCommentsField().type('Comments')
        clientProfile.getClinicalDetailsWaitlistCommentsField().clear()
        clientProfile.getEditSaveButton().click()
        cy.wait(3000)
        createClient.getToastMessage().should('be.visible').should('have.text', this.clientdata.toastSavedClientClinical)


        //Circle of care
        clientProfile.getClientContacMenuButtons().each(($el, index, $list)=>{
            const clientDetails = $el.text()
            if(clientDetails.includes(this.clientdata.circleOfCare))
            {
                $el.click()
            }
        })

        //add contact

        clientProfile.getCircleOfCareButtons().contains(this.clientdata.circleOfCareAddContact).click()

        clientProfile.getContactDetailsFirstName().type(this.clientdata.circleOfCareName)
        clientProfile.getContactDetailsLastName().type(this.clientdata.circleOfCareLastName)
        clientProfile.getRelationshipField().type(this.clientdata.circleOfCareRelationship)
        
        clientProfile.getContactDetailsAddress().type(this.clientdata.circleOfCareAddress)
        clientProfile.getContactDetailsCity().type(this.clientdata.circleOfCareCity)
        clientProfile.getContactDetailsZipCode().type(this.clientdata.circleOfCareZip)
        clientProfile.getContactDetailsStateDropdown().click()
        clientProfile.getSelectState().contains(this.clientdata.circleOfCareState).click()
        clientProfile.getEditSaveButton().click()
        cy.wait(3000)
        createClient.getToastMessage().should('have.text', this.clientdata.saveCircleOfCareToast)
        clientProfile.getCircleofCareCard().should('be.visible')
        

        //delete circle of care contact

        clientProfile.getClickOnCircleOfCareCard().click()
        clientProfile.getDeleteCircleOfCare().click()
        clientProfile.getConfirmDeleteCircleOfCare().click()
        createClient.getToastMessage().should('have.text', this.clientdata.removeCircleOfCareToast)
        cy.wait(3000)



        //Account Details

        clientProfile.getClientContacMenuButtons().each(($el, index, $list)=>{
            const clientDetails = $el.text()
            if(clientDetails.includes(this.clientdata.accountDetails))
            {
                $el.click()
            }
        })
        clientProfile.getEditButton().click()

//Set to auto invoice, receipt and payment
        clientProfile.getInvoiceCreation().click()
        clientProfile.getOption().contains('Create Automatically').click()
        clientProfile.getInvoiceSendingDropdown().click()
        clientProfile.getOption().contains('Send Automatically').click()
        clientProfile.getReceiptSendingDropdown().click()
        clientProfile.getOption().contains('Send Automatically').click()
        clientProfile.getPaymentProcessingDropdown().click()
        clientProfile.getOption().contains('Process Automatically').click({force:true})
        cy.wait(3000)
        clientProfile.getEditSaveButton().click()
        createClient.getToastMessage().should('have.text', "Saved client account settings")

        //Validate it is set to Automatic

        clientProfile.getInvoiceCreationSelected().should('have.text', 'Create Automatically')
        clientProfile.getInvoiceSendingSelected().should('have.text', 'Send Automatically')
        clientProfile.getReceiptSendingSelected().should('have.text', 'Send Automatically')
        clientProfile.getPaymentProcessSelected().should('have.text', 'Process Automatically')

        //Set to manual
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


/*
        //Payment method

        clientProfile.getClientContacMenuButtons().each(($el, index, $list)=>{
            const clientDetails = $el.text()
            if(clientDetails.includes('Payment Method'))
            {
                $el.click()
            }
        })

        cy.get('.ContactClinical__TabContentActions-sc-n5t4b1-2.dcWuki button').click() //get add payment method button
        cy.get('.Modal__Actions-sc-m5rli6-2.kqmGrI button').click() //add a card button from modal
        //Add a creadit card modal

        cy.get('.css-1c8pw3s.react-select__value-container').eq(1).click() //select state dropdown
        cy.get('#react-select-5-option-3').click() //selecting Arizona
        cy.get('input[name="address_zip"]').type('89138')
        
        //card number is in iframe
        //.__PrivateStripeElement
       // cy.get('.PaymentMethod__Section-sc-1cf3njh-3.jOxPOs input').eq(0).should('be.visible')
       
        //cy.get('.Modal__Content-sc-m5rli6-1.cAuohE').frameLoaded('iframe[name="__privateStripeFrame4074"]')
        //cy.iframe().find('.PaymentMethod__Section-sc-1cf3njh-3.jOxPOs input').eq(0).type('12334')
        const getIframeBody = ()=>{
            return cy.get('iframe[name*="__privateStripeFrame"]').eq(0)
            .then(cy.wrap)
        }
        //getIframeBody().find('.PaymentMethod__Section-sc-1cf3njh-3.jOxPOs input').type('1234')
        getIframeBody().find('.PaymentMethod__Section-sc-1cf3njh-3.jOxPOs input').type('1234')
        */


        //Medication
        clientProfile.getClientContacMenuButtons().each(($el, index, $list)=>{
            const clientDetails = $el.text()
            if(clientDetails.includes(this.clientdata.medications))
            {
                $el.click()
            }
        })
        //getAddMedicationButton
        
        clientProfile.getAddMedicationsButton().click()
        clientProfile.getMedicationNameField().click()
        clientProfile.getMedicationDropdown().contains('Ativan').click()
        clientProfile.getMedicationNameField().should('have.text', "Ativan [lorazepam]")
        
        clientProfile.getMedicationCategoryField().should('have.text', 'Antianxiety')
        clientProfile.getSaveMedicationButton().contains('Save').click()
        createClient.getToastMessage().should('have.text', "Saved Medication Information")
        
        clientProfile.getCreatedMedicationCard().click()
        clientProfile.getDeleteMedicationButton().click() //delete medication
        cy.wait(2000)
        clientProfile.getConfirmDeleteMedicationButton().click() //confirm delete
        createClient.getToastMessage().should('have.text', "Deleted Medication Information")
        
        clientProfile.getCreatedMedicationCard().should('not.exist')

  

    })

    
})