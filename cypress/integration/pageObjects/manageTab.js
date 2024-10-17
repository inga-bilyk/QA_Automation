class ManageTab{

    getManageTabOptiones()
    {
        return cy.get('.bp3-fill.bp3-text-overflow-ellipsis span')
    }
    getSelectFormToSend()
    {
        return cy.get('.Checkbox__Wrapper-sc-t01l89-0.kQxRno').eq(1)
    }
    getSendFormButton()
    {
        return cy.get('.Header__HeaderWrapper-sc-xfcimv-0.gkeOHm button')
    }
    getSearchClientField()
    {
        return cy.get('[data-testid="containers_client-actions_send-forms_client-search-bar"]')
    }
    getSelectClient()
    {
        return cy.get('.ClientCodeBlock__Wrapper-sc-zzoprq-4')
    }
    getSelectEmail()
    {
        return cy.get('.EmailRecipients__ListContainer-sc-1lu1hth-6.TyqUk div').find('input[type="checkbox"]')
    }
    getSendFormButton()
    {
        return cy.get('.Modal__Actions-sc-m5rli6-2.kqmGrI button').contains('Send Forms')
    }
    getToasMessage()
    {
        return cy.get('.Toast__ToastWrapper-sc-6le1g8-0')
    }

}
export default ManageTab