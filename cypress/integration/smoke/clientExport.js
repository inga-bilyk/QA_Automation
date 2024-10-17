///<reference types="cypress-iframe"/>
import 'cypress-iframe'
import CreateClient from '../pageObjects/createClient'
import LogIn from '../pageObjects/logIn'
import ClinicGeneral from '../pageObjects/clinicGeneral'
import ClientProfile from '../pageObjects/clientProfile'
import ClientExport from '../pageObjects/clientExport'
describe('Secure Messages', function(){

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



    it('Validate a user can create secure messaging', function(){
        const createClient = new CreateClient()
        const logIn = new LogIn()
        const clinicGeneral = new ClinicGeneral()
        const clientProfile = new ClientProfile()
        const clientExport = new ClientExport()

      
       cy.visit(Cypress.env('canLoginUrl'))
       
        logIn.getEmailField().type(this.data.email)
        logIn.getPasswordField().type(this.data.password)
        logIn.getSignInButton().contains('Sign In').click() 

        logIn.getUserNameValidation().should('have.text', this.data.textValue)
        
        createClient.getClientsTab().contains('Clients').click()

        clinicGeneral.getSelectClientFromClientTab().click() 

        cy.wait(3000)

        clientExport.getClientExportOption().click()

        cy.wait(3000)

        clientExport.getExportButton().click()
        clientExport.getSuccessToast().should('be.visible').should('have.text','Successfully created client export - Please check back tomorrow for your completed export on the Clients > Exports page')
     
    })

    
})