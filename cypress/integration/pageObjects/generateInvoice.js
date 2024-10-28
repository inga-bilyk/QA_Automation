class GenerateInvoice
{
    getSetAttendedSession()
    {
        return cy.get(':nth-child(1) > .bp3-popover-target > .undefined')
    }
   
    getCreateInvoiceTab()
    {
        return cy.get('#containers_client_navigation_create-invoice')
    }
    getCreateInvoiceButton()
    {
        return cy.get('[data-testid="components_create-invoice_create-invoice-button"]')
    }
    getCloseCreateInvoiceModal()
    {
        return cy.get('[data-testid="containers_client-action-controller_pdf-preview-modal"]')
    }
    getRecordPaymentTab()
    {
        return cy.get('#containers_client_navigation_record-payment > .bp3-fill > span')
    }
    getPaymentMethodDropdown()
    {
        return cy.get(':nth-child(1) > .forms__InputWrapper-sc-t9y1rr-6 > .css-10nd86i > .css-120k65n > .css-1c8pw3s')
    }
    getPayment()
    {
        return cy.get('.css-1l1x8y')
    }
    getPaymentConfirmationNumberField()
    {
        return cy.get('input[name="confirmation_number"]')
    }
    getRecordPaymentButton()
    {
        return cy.get('.Modal__Actions-sc-m5rli6-2.kqmGrI button').contains('Record Payment')
    }
    getCloseRecordPaymentDialog()
    {
        return cy.get('.bp3-button.bp3-minimal.bp3-dialog-close-button')
    }
    getReceiptModal()
    {
        return cy.get('.RecordPaymentModal__ModalTitle-sc-clab2e-2')
    }
    getCloseReceiptModal()
    {
        return cy.get('.Modal__Actions-sc-m5rli6-2.kqmGrI button')
    }
    getFinancesTab()
    {
        return cy.get('[data-testid="containers_client_navigation_finances"] > .bp3-fill')
    }
    getReceiptStatus()
    {
        return cy.get('.Desktop__PaymentStatusWrapper-sc-14dmusv-0.etDeiZ')
    }
    getCheckReceiptCheckbox()
    {
        return cy.get('.TableBody-sc-wx7xui-0 > .table-row').find('label[class*="Checkbox__Label"]')
    }
    getDeleteReceiptButton()
    {
        return cy.get('.Header__HeaderWrapper-sc-xfcimv-0 button').contains('Delete')
    }
    getDeleteReceiptConfirmModal()
    {
        return cy.get('.Modal__Actions-sc-m5rli6-2.kqmGrI')
    }
    getConfirmDeleteReceiptButton()
    {
        return cy.get('button[type="button"]').contains('Delete Receipt')
    }
    getInvoicesTab()
    {
        return cy.get('.TabView__TabBar-sc-1doprxs-1.hugMcT button').contains('Invoices')
    }
    getInvoiceCheckbox()
    {
        return cy.get('.TableBody-sc-wx7xui-0 > .table-row').find('label[class*="Checkbox__Label"]')
        
    }
    getDeleteInvoiceButton()
    {
        return cy.get('.Header__HeaderWrapper-sc-xfcimv-0 button').contains('Delete')
    }
    getConfirmDeleteInvoiceButton()
    {
        return cy.get('.Modal__Actions-sc-m5rli6-2.kqmGrI button').contains('Delete Invoice')
    }
    


}

export default GenerateInvoice