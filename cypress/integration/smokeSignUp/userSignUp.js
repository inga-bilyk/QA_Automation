///<reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('User can sign up for a clinic', function(){

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

    it('Create a new acct', function(){

        cy.visit('https://qa-marketing.owlpractice-dev.ca/signup/')

        cy.get('.elementor-widget-container > iframe').then($iframe => {
            const firstIframeBody = $iframe[0].contentDocument.body;
            cy.wrap(firstIframeBody).find('iframe[src*="signup"]').then($innerIframe => {
              const secondIframeBody = $innerIframe[0].contentDocument.body;
              cy.wrap(secondIframeBody ).within(()=>{
                cy.contains('button', 'Start Free Trial').click({ force: true });
                cy.get('input[name="FirstName"]').type('Inga')
                cy.get('#last_name').type('Bilyk')
                cy.get('#personal_email').type('ibilyk@owlpracticesuite.com')
                cy.get('#practice_url').type('bilyktest+1')
                cy.get('#password').type('!Inga11!!')
                cy.get('#password_conf').type('!Inga11!!')
                cy.get('#discount_type').select('Solo Therapist').should('have.value', 'trial_solo')
                //cy.get('#association').select('CPA').should('have.value', 'Alabama Counceling Association')
                cy.get('#association').select('1000003', {force:true})
                //.select('Alabama Counceling Association').should('have.value', '1000003')
                /*
                //Recaptcha
                cy.get('.g-recaptcha iframe').then($iframe=>{
                    const $body = $iframe.contents().find('body')
                    cy.wrap($body).find('')
                    .should('be.visible')
                })
                    */
              })
                
/*
cy.get('.elementor-widget-container > iframe')
.its('0.contentDocument').its('body').should('exist').then(cy.wrap).get('iframe[src*="signup"]').its('0.contentDocument').its('body')
.should('exist').should('not.be.undefined').then(cy.wrap)


.get('iframe[src*="google"]')
.invoke('attr', 'style', 'height:600px; width:800px; visibility:visible; display:block;').invoke('css', 'display', 'block')
//.its('0.contentDocument').should('exist')
.should('not.be.undefined').then(cy.wrap).find('#first_name', {timeout: 60000}).type('Inga')


*/
    })

    
        })
    })
})