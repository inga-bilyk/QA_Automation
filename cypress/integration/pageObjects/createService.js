class CreateService{
getServicesAndFeesTab()
{
    return cy.get('[data-testid="containers_settings_navigation_services-fees"] > .bp3-fill > span')
}
getAddServiceButton()
{
    return cy.get('[data-testid="components_datatable_header_button_add-item"]')
}
getServiceTypeDropdown()
{
    return cy.get(':nth-child(3) > [data-testid="components_select_form-select"] > .css-10nd86i > .css-120k65n > .css-1c8pw3s')
    
}
getServiceTypeSelection()
{
    return cy.get('.css-1igavqo').contains('Family')
}
getTherapistGrade()
{
    return cy.get(':nth-child(4) > .css-10nd86i > .css-120k65n > .css-1c8pw3s')
    
}
getTherapistGradeSelection()
{
    return cy.get('.css-1igavqo').contains('Default')
}
getFeeField()
{
    return cy.get('input[name="fee"]')
    
}
getServiceNameField()
{
    return cy.get('input[name="service_name"]')
    
}
getAllowOnPortalDropdown()
{
    return cy.get('.common__Grid-sc-1hb9rs-31 > :nth-child(1) > .css-10nd86i > .css-120k65n > .css-1c8pw3s')
    
}
getAllowOnPortalOption()
{
    return cy.get('.css-1igavqo').contains('All clients')
}
getCreateServiceButton()
{
    //return cy.get('[data-testid="containers+settings-services-and-fees_create-or-save-service"]')
    return cy.get('button[type="button"]').contains('Create Service')
}
getDuration()
{
    return cy.get('input[name="duration"]')
    
}
getSelectAddedService()
{
    return cy.get('.TableBody-sc-wx7xui-0 > :nth-child(1) > .table-row-checkbox')
}
getDeleteServiceButton()
{
    return cy.get('.Header__ActionsWrapper-sc-xfcimv-3.eBwHf button:nth-child(3)').as('btn').should('be.visible')
}
getDeleteFromModal()
{
    return cy.get('button[type="button"]').contains('Delete Service')
}

}

export default CreateService