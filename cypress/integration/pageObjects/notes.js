class Notes{
getCreateNoteButton()
{
    return cy.get('div[class*="SessionOverview__Workspace-sc-1"] li:nth-child(7)')
}
getChooseTemplateDropdown()
{
    return cy.get('.css-10nd86i.styles__StyledDropdown-sc-57lqb0-1.eKctnM')
}
getTemplateDropdownItems()
{
    return cy.get('.css-1igavqo')
}
getTemplateSelectionModal()
{
    return cy.get('.Modal__Content-sc-m5rli6-1.cAuohE div div button:nth-child(1)')
}
getUseTemplateButton()
{
    return cy.contains('Use Template')
}
getTemplateLabels()
{
    return cy.get('.NodeLabel__DisplayNode-sc-lgutv6-1.jobeoE:nth-child(1)')
}
getNotesWindowButtons()
{
    return cy.get('.Modal__Actions-sc-m5rli6-2.kqmGrI button')
}
getSignNote()
{
    return cy.get(':nth-child(16) > .bp3-menu-item > .bp3-fill')
}
getButtonsAfterSignNote()
{
    return cy.get('.Modal__Actions-sc-m5rli6-2 button')
}
getTemplateDropdownAfterSign()
{
    return cy.get('.bp3-menu > :nth-child(11)')
}
getCommentsInputField()
{
    return cy.get('.CommentsPanel__StyledTextArea-sc-1ivbdv-1')
}
getCloseNoteModalButton()
{
    return cy.get('.Modal__Actions-sc-m5rli6-2 button').contains('Close')
}
getStatusTextOfTheBooking()
{
    return cy.get(':nth-child(7) > .bp3-menu-item > .bp3-fill')
}
}

export default Notes