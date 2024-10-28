///<reference types="cypress-iframe"/>
import 'cypress-iframe'
import CreateClient from '../pageObjects/createClient'
import LogIn from '../pageObjects/logIn'
import ClinicGeneral from '../pageObjects/clinicGeneral'
import ClientProfile from '../pageObjects/clientProfile'
import Workflow from '../pageObjects/workflow'
import Settings from '../pageObjects/settings'
describe('Settings of the clinic', function(){

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
        cy.fixture('workflow').then(function(workflowdata){
            this.workflowdata = workflowdata  //hfhinga bilyk
        })

        cy.fixture('settings').then(function(settingsdata){
            this.settingsdata = settingsdata  //hfhinga bilyk
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



    it('Validate the settings tab', function(){
        const createClient = new CreateClient()
        const logIn = new LogIn()
        const clinicGeneral = new ClinicGeneral()
        const clientProfile = new ClientProfile()
        const workflow = new Workflow()
        const settings = new Settings()

      
       cy.visit(Cypress.env('canLoginUrl'))
       


        logIn.getEmailField().type(this.data.email)
        logIn.getPasswordField().type(this.data.password)
        logIn.getSignInButton().contains('Sign In').click() 

        //logIn.getUserNameValidation().should('have.text', this.data.textValue)
        createClient.getClientsTab().contains('Settings').click()
        

        settings.getSettingsTabs().should('have.text', this.settingsdata.settingsTabsNames)
        settings.getSettingsTabsSpan().contains('Locations').click()
        settings.getSettingsTabTitle().should('have.text', 'Locations')

        settings.getSettingsTabsSpan().contains('Administrators').click()
    
        settings.getSettingsTabTitle().should('contain', 'All Administrators')


        settings.getSettingsTabsSpan().contains('Therapists').click()
   
        settings.getSettingsTabTitle().should('contain', 'All Therapists')

        

        settings.getSettingsTabsSpan().contains('Therapist Grades').click()
   
        settings.getSettingsTabTitle().should('contain', 'Therapist Grades')

        settings.getSettingsTabsSpan().contains('Services and Fees').click()
   
        settings.getSettingsTabTitle().should('contain', 'Services and Fees')

        settings.getSettingsTabsSpan().contains('Client Portal').click()

        settings.getSettingsTabTitle().should('have.text', 'Client Portal')

        settings.getSettingsTabsSpan().contains('Payment Details').click()

        settings.getSettingsTabTitle().should('contain', 'Payment Details')

        settings.getSettingsTabsSpan().contains('Notifications').click()

        settings.getSettingsTabTitle().should('contain', 'Reminders for')

        settings.getSettingsTabsSpan().contains('User Access').click()

        settings.getSettingsTabTitle().should('contain', 'Users')

        settings.getSettingsTabsSpan().contains('Subscription').click()

        settings.getSettingsTabTitle().should('contain', 'Subscription Management')


    })

    
})