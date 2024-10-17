///<reference types="cypress-iframe"/>
import 'cypress-iframe'
import CreateClient from '../pageObjects/createClient'
import LogIn from '../pageObjects/logIn'
import ClinicGeneral from '../pageObjects/clinicGeneral'
import ClientProfile from '../pageObjects/clientProfile'
import Workflow from '../pageObjects/workflow'
import Settings from '../pageObjects/settings'
import ManageTab from '../pageObjects/manageTab'
describe('Manage Tabs of the clinic', function(){

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



    it('Validate a user can navigate through manage tabs of the clinic', function(){
        const createClient = new CreateClient()
        const logIn = new LogIn()
        const clinicGeneral = new ClinicGeneral()
        const clientProfile = new ClientProfile()
        const workflow = new Workflow()
        const settings = new Settings()
        const manageTab = new ManageTab()

      
       cy.visit(Cypress.env('canLoginUrl'))
       


        logIn.getEmailField().type(this.data.email)
        logIn.getPasswordField().type(this.data.password)
        logIn.getSignInButton().contains('Sign In').click() 

        logIn.getUserNameValidation().should('have.text', this.data.textValue)
        createClient.getClientsTab().each(($el, index, $list)=>{
            if($el.text()==="Manage")
            {
                $el.click()
            }

            
        })

        // Define the list of tabs you want to validate
        const tabs = [
            { name: 'Forms', validationText: 'Forms' },
            { name: 'Measures', validationText: 'Measures' },
            { name: 'Handwritten Notes', validationText: 'Handwritten Notes' },
            { name: 'Notes', validationText: 'Notes' },
            { name: 'Practice Documents', validationText: 'Practice Documents' },
            
          ];
        
          tabs.forEach(tab => {
            // Click on the tab
            cy.contains('span', tab.name).should('be.visible').click();
            
            // Log the HTML to inspect the page after clicking
            cy.get('body').then(($body) => {
              cy.log($body.html());
            });
        
            // Validate the title (without relying on class-based selectors)
            cy.contains(tab.validationText, { timeout: 15000 }).should('exist');
            
            // Wait to ensure the transition completes
            cy.wait(2000);
      });

      //send a form to a client

      manageTab.getManageTabOptiones().each(($el, index, $list)=>{
        if($el.text()==="Forms")
        {
            $el.click()
        }
      })

      manageTab.getSelectFormToSend().click({force:true})
      cy.get('.Header__HeaderWrapper-sc-xfcimv-0.gkeOHm button').contains('Send').click()
      manageTab.getSearchClientField().type('Eva')
      manageTab.getSelectClient().click()
      manageTab.getSelectEmail().click()
      manageTab.getSendFormButton().click()
      
     manageTab.getToasMessage().should('be.visible').should('have.text', "Successfully sent form(s)")



    })

    
})