class BookSession{

    getDayViewCalendar()
    {
        return cy.get('.Toolbar__CalendarToolbarWrapper-sc-1jryfir-0.jesMwL button:nth-child(1)').contains('Day')
    }
    getSelectDateTime()
    {
        return cy.get('tr[data-time="10:30:00"]')
    }
    getClientNameField()
    {
        return cy.get('[data-testid="forms_session_client_client-name"]')
    }
    getSelectClient()
    {
        return cy.get('.bp3-popover-content > .bp3-menu')
    }
    getServiceDropdown()
    {
        return cy.get(':nth-child(3) > :nth-child(2) > [data-testid="components_select_form-select"] > .css-10nd86i > .css-120k65n > .css-1c8pw3s')
    }
    getService()
    {
        return cy.get('.css-1igavqo')
    }
    getCreateSessionButton()
    {
        return cy.get('.kpgNZq')
    }
    getBookedSessionClick()
    {
        return cy.get('a[class*="fc-time-grid-event"]')
    }
    getMoreButton()
    {
        return cy.get('.SessionOverview__MoreInfoRow-sc-1x1t2dh-2.jxqubN button')
    }
    getAmountChargedField()
    {
        //return cy.get('.FormField__InputRow-sc-s9tc33-1 > .common__Input-sc-1hb9rs-23')
      //  return cy.get('.common__Input-sc-1hb9rs-23.fqKqHY').eq(2)
      return cy.get('.FormField__StyledDisabledInput-sc-s9tc33-2 > .common__Input-sc-1hb9rs-23')
      //cy.get('.common__Input-sc-1hb9rs-23.fIkdpa').eq(2)
    }
    getDurationField()
    {
        return cy.get('input[name="duration"]')
    }
    getUpdateSessionButton()
    {
        return cy.get('.Modal__Actions-sc-m5rli6-2.kqmGrI').contains('Save Session')
    }
    getUpdateDialogConfirmButton()
    {
        return cy.get('div[role="dialog"] button').contains('Confirm')
    }
    getDeleteSessionButton()
    {
        return cy.get('.Modal__Actions-sc-m5rli6-2.kqmGrI').contains('Delete')
    }
    getDialogDeleteSessionButton()
    {
        return cy.get('.highest-z-index > .bp3-overlay > .bp3-dialog-container > .bp3-dialog > .Modal__Actions-sc-m5rli6-2').contains('Delete Session')
    }

}
export default BookSession