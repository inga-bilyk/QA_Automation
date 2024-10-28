class ClientProfile
{
    getClientMenuItems()
    {
        return cy.get('.bp3-menu.bp3-large span')
    }
    getClientContacMenuButtons()
    {
        return cy.get('div[class*="TabView__TabBar"] button')
        
        
    }
    getEditButton()
    {
        
        return cy.get('button[type="button"]').contains('Edit')
    }
    
    getEditSaveButton()
    {
        return cy.get('button[type="button"]').contains('Save')
       
    }
    getClinicalDetailsWaitlistCommentsField()
    {
        return cy.get('textarea[name="waitlist_comments"]')
    }
    getCircleOfCareButtons()
    {
        return cy.get('button[type="button"]')
      
    }
    getContactDetailsFirstName()
    {
        return cy.get('input[name="alt_first_name"]')
    }
    getContactDetailsLastName()
    {
        return cy.get('input[name="alt_last_name"]')
    }
    getRelationshipField()
    {
        return cy.get('input[name="relationship"]')
    }
    getContactDetailsAddress()
    {
        return cy.get('input[name="alt_street_address"]')
    }
    getContactDetailsCity()
    {
        return cy.get('input[name="alt_city"]')
    }
    getContactDetailsZipCode()
    {
        return cy.get('input[name="alt_postal_code"]')
    }
    getContactDetailsStateDropdown()
    {
        return cy.get(':nth-child(2) > .css-10nd86i > .css-120k65n > .css-1c8pw3s')
    }
    getSelectState()
    {
        return cy.get('.css-1igavqo')
    }
    getCircleofCareCard()
    {
        return cy.get('.CoCTable__ClientName-sc-s6s5li-0')
    }
    getClickOnCircleOfCareCard()
    {
        return cy.get('.TableBody-sc-wx7xui-0 > :nth-child(1) > .table-row-checkbox')
    }
    getDeleteCircleOfCare()
    {
        return cy.get('button[type="button"]').contains('Delete')
        
    }
    getConfirmDeleteCircleOfCare()
    {
        return cy.get('button[type="button"]').contains('Delete Entry')
       
    }
    getInvoiceCreation()
    {
        return cy.get('.css-10nd86i').eq(0)
    }
    getOption()
    {
        return cy.get('.css-1igavqo')
    }
    getInvoiceSendingDropdown()
    {
        return cy.get('.css-10nd86i').eq(1)
    }
    getReceiptSendingDropdown()
    {
        return cy.get('.css-10nd86i').eq(2)
    }
    getPaymentProcessingDropdown()
    {
        return cy.get('.css-10nd86i').eq(3)
    }
    getInvoiceCreationSelected()
    {
        return cy.get('.styles__Value-sc-12wnqaq-5.gDmrcN').eq(1)
    }
    getInvoiceSendingSelected()
    {
        return cy.get('.styles__Value-sc-12wnqaq-5.gDmrcN').eq(2)
    }
    getReceiptSendingSelected()
    {
        return cy.get('.styles__Value-sc-12wnqaq-5.gDmrcN').eq(3)
    }
    getPaymentProcessSelected()
    {
        return cy.get('.styles__Value-sc-12wnqaq-5.gDmrcN').eq(4)
    }
    getAddMedicationsButton()
    {
        return cy.get('button[aria-label="Add Medication Info"]')
        
    }
    getMedicationNameField()
    {
        return cy.get('.css-1c8pw3s.react-select__value-container').eq(0)
               
    }
    getMedicationDropdown()
    {
        return cy.get('.css-1igavqo')
    }
    getMedicationCategoryField()
    {
        return cy.get('.css-1c8pw3s.react-select__value-container').eq(1)
    }
    getSaveMedicationButton()
    {
        return cy.get('.Modal__Actions-sc-m5rli6-2.kqmGrI button')
    }
    getCreatedMedicationCard()
    {
        return cy.get('.Medication__MedicationCardContainer-sc-151b5lg-0.kYqevV')
               
    }
    getDeleteMedicationButton()
    {
        return cy.get('.Modal__Actions-sc-m5rli6-2.kqmGrI button').contains('Delete')
    }
    getConfirmDeleteMedicationButton()
    {
        return cy.get('.Modal__Actions-sc-m5rli6-2.kqmGrI button').contains('Delete Entry')
    }

}
export default ClientProfile