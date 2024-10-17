///<reference types="cypress-iframe"/>
import 'cypress-iframe'
import CreateClient from '../pageObjects/createClient'
import LogIn from '../pageObjects/logIn'
import CreateService from '../pageObjects/createService'
describe('Create a new service in the clinic', function(){

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



    it('Create a new service', function(){
        const createClient = new CreateClient()
        const logIn = new LogIn()
        const createService = new CreateService()

       
       cy.visit(Cypress.env('canLoginUrl'))
      


        logIn.getEmailField().type(this.data.email)
        logIn.getPasswordField().type(this.data.password)
        logIn.getSignInButton().contains('Sign In').click() 

        logIn.getUserNameValidation().should('have.text', this.data.textValue)
        createClient.getClientsTab().each(($el, index, $list)=>{
            if($el.text()==="Settings")
            {
                $el.click()
            }

            
        })
        createService.getServicesAndFeesTab().click()
        
        createService.getAddServiceButton().click()
        createService.getServiceTypeDropdown().click()
        createService.getServiceTypeSelection().click()

        createService.getTherapistGrade().click()
        createService.getTherapistGradeSelection().click()
        createService.getFeeField().type('120')
        createService.getDuration().type('60')
        createService.getServiceNameField().type('Automated Servise')
        createService.getAllowOnPortalDropdown().click()
        createService.getAllowOnPortalOption().click()
        createService.getCreateServiceButton().click()
        createClient.getToastMessage().should('be.visible').should('have.text', 'Successfully added new service')

        cy.wait(6000)


        //Deleting service
        
        

            createService.getSelectAddedService()
        .click()
        
        cy.wait(4000)
        createService.getDeleteServiceButton().click()
       createService.getDeleteFromModal().click()
       createClient.getToastMessage().should('be.visible').should('have.text', 'Successfully deleted service')

     

        })
            
        
        
       
    })

    
