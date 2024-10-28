///<reference types="cypress-iframe"/>
import 'cypress-iframe'
import CreateClient from '../pageObjects/createClient'
import LogIn from '../pageObjects/logIn'
import ClinicGeneral from '../pageObjects/clinicGeneral'
import ClientProfile from '../pageObjects/clientProfile'
import Workflow from '../pageObjects/workflow'
describe('Workflow tab of the clinic', function(){

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



    it('Validate all the tabs of the Workflow tab', function(){
        const createClient = new CreateClient()
        const logIn = new LogIn()
        const clinicGeneral = new ClinicGeneral()
        const clientProfile = new ClientProfile()
        const workflow = new Workflow()

       
       cy.visit(Cypress.env('canLoginUrl'))
       


        logIn.getEmailField().type(this.data.email)
        logIn.getPasswordField().type(this.data.password)
        logIn.getSignInButton().contains('Sign In').click() 

        //logIn.getUserNameValidation().should('have.text', this.data.textValue)

        createClient.getClientsTab().contains('Workflow').click()
        
        
//Go to attendance tab
cy.contains('.bp3-fill.bp3-text-overflow-ellipsis span', this.workflowdata.Attendancetab)
    .click({ force: true });
        cy.wait(3000)
        workflow.getTabTitle().contains("Sessions")

        workflow.getTabDataSections().should('have.length', 6).and('have.text', this.workflowdata.AttendanceItems)

// To Invoice
workflow.getWorkflowTabs().contains(this.workflowdata.ToInvoiceTab).click()

workflow.getTabTitle().contains('Invoice')
workflow.getTabDataSections().should('have.length', 7).and('have.text', this.workflowdata.InvoiceItems)

//Go to attendance tab


workflow.getWorkflowTabs().contains(this.workflowdata.Attendancetab).click()

    
cy.wait(3000)
workflow.getTabTitle().contains("Sessions")

workflow.getTabDataSections().should('have.length', 6).and('have.text', this.workflowdata.SessionsItems)
//Unpayed < 30

workflow.getWorkflowTabs().contains(this.workflowdata.UnpaidLess30).click()

    
cy.wait(3000)
workflow.getTabTitle().contains('Unpaid < 30 Days')
workflow.getTabDataSections().should('have.length', 9).and('have.text', this.workflowdata.UnpayedLess30Items)

//Autopay

workflow.getWorkflowTabs().contains('Autopay').click()


cy.wait(3000)
workflow.getTabTitle().contains('Autopay')
workflow.getTabDataSections().should('have.length', 7).and('have.text', this.workflowdata.AutoPayItems)

workflow.getWorkflowTabs().each(($el, index, $list)=>{
    if($el.text().trim()== this.workflowdata.UnpaidMore30.trim())
    {
        cy.wrap($el).scrollIntoView().click({force:true})
    }
})
cy.wait(3000)
workflow.getTabTitle().contains('Unpaid > 30 Days')
workflow.getTabDataSections().should('have.length', 9).and('have.text', this.workflowdata.UnpayedMore30DaysItems)

//Summary tabs

workflow.getWorkflowSummaryTabs().should('have.text', this.workflowdata.SummaryItems)


    })

    
})