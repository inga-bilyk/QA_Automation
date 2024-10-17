class SecureMessages
{
    getStartedSecureMessagesButton()
    {
        return cy.get('.EmptyView__Content-sc-kss9up-1.foOAgr button')
    }
    getSubjectField()
    {
        return cy.get('.Modal__Content-sc-m5rli6-1.cAuohE input')
    }
    getCreateButton()
    {
        return cy.get('.Modal__Actions-sc-m5rli6-2.kqmGrI button')
    }
    getToastMessageForClientNoProfile()
    {
        return cy.get('.common__ModalContent-sc-1hb9rs-12.lafZOU')
    }

}

export default SecureMessages