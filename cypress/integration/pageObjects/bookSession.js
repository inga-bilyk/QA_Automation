class BookSession{

    getDayViewCalendar()
    {
        
        return cy.get('button[class*="undefined Button__ButtonBase"]').contains('Day')
        
    }
    getSelectDateTime()
    {
        return cy.get('tr[data-time="11:30:00"]')
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
        return cy.get('button[type="button"]').contains('Create Session')
    }
    getBookedSessionClick()
    {
        return cy.get('a[class*="fc-time-grid-event"]')
    }
    getMoreButton()
    {
        
        return cy.get('button[class*="SessionOverview__MoreInfoButton"]').contains('More Info')
        
    }
    getAmountChargedField()
    {
       
      
      return cy.get('input[class*="common__Input"]').eq(2)
      
      
    }
    getDurationField()
    {
        return cy.get('input[name="duration"]')
    }
    getUpdateSessionButton()
    {
        
        return cy.get('button[type="button"]').contains('Save Session')
       
    }
    getUpdateDialogConfirmButton()
    {
        return cy.get('div[role="dialog"] button').contains('Confirm')
    }
    getDeleteSessionButton()
    {
        
        return cy.get('button[type="button"]').contains('Delete')
    }
    getDialogDeleteSessionButton()
    {
        return cy.get('button[type="button"]').contains('Delete Session')
        
    }

}
export default BookSession