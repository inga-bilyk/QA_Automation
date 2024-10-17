///<reference types="cypress-iframe"/>
import 'cypress-iframe'
import CreateClient from '../pageObjects/createClient'
import LogIn from '../pageObjects/logIn'
import ClinicGeneral from '../pageObjects/clinicGeneral'
import ClientProfile from '../pageObjects/clientProfile'
import Workflow from '../pageObjects/workflow'
import Dashboard from '../pageObjects/dashboard'
describe('Validate Dashboard', function(){

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



    it('Validate Dashboard', function(){
        const createClient = new CreateClient()
        const logIn = new LogIn()
        const clinicGeneral = new ClinicGeneral()
        const clientProfile = new ClientProfile()
        const workflow = new Workflow()
        const dashboard = new Dashboard()

       
       cy.visit(Cypress.env('canLoginUrl'))
       


        logIn.getEmailField().type(this.data.email)
        logIn.getPasswordField().type(this.data.password)
        logIn.getSignInButton().contains('Sign In').click() 

        logIn.getUserNameValidation().should('have.text', this.data.textValue)
        
        createClient.getClientsTab().contains('Dashboard').click()

        dashboard.getDashboardTabsNames().should('have.text', 'Year Over YearPractice StatsClinical StatsData ExportStripe')
        
        dashboard.getDashboardTabs().contains('Data Export').click()

       // Find all export buttons and validate that they are visible
    dashboard.getDashboardExportButtons().should('exist').and('be.visible');

    //log the number of export buttons for debugging
    dashboard.getDashboardExportButtons().then(($buttons) => {
      cy.log(`Number of Export buttons found: ${$buttons.length}`);
        });

      
      });
    });
      
    

   

    

        

        




      




    

    
