///<reference types="cypress-iframe"/>
import 'cypress-iframe'
import CreateClient from '../pageObjects/createClient'
import LogIn from '../pageObjects/logIn'
import ClinicGeneral from '../pageObjects/clinicGeneral'
import ClientProfile from '../pageObjects/clientProfile'
import SecureMessages from '../pageObjects/secureMessages'
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
        const secureMessages = new SecureMessages()

       // cy.visit('https://ingatestpractice.owlpractice-dev.com/')
       cy.visit(Cypress.env('canLoginUrl'))
       


        logIn.getEmailField().type(this.data.email)
        logIn.getPasswordField().type(this.data.password)
        logIn.getSignInButton().contains('Sign In').click() 

        logIn.getUserNameValidation().should('have.text', this.data.textValue)
        createClient.getClientsTab().contains('Clients').click()
        

        clinicGeneral.getSelectClientFromClientTab().click() 

        cy.wait(3000)

        

        clientProfile.getClientMenuItems().contains('Secure Messaging').click()
        
       secureMessages.getStartedSecureMessagesButton().click()  //get started button

       secureMessages.getSubjectField().type('Test')     //type subject of the secure messaging
       secureMessages.getCreateButton().contains('Create').click()
       //Client doeesn't have a client profile
       secureMessages.getToastMessageForClientNoProfile().should('have.text', "The Client(s) you have selected does not have an Client Portal account. To send them a secure message, please edit their Online Portal Settings in their Client Profile.")



       

       










    })

    
})