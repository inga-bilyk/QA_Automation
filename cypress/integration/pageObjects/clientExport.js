class ClientExport{

    getClientExportOption()
    
    {
        return cy.get('.bp3-menu.bp3-large span').contains('Client Export')
    }

    getExportButton()
    {
        return cy.get('button[type="button"]').contains('Export')
    }
    getSuccessToast()
    {
        return cy.get('.Toast__ToastWrapper-sc-6le1g8-0')
    }

}

export default ClientExport