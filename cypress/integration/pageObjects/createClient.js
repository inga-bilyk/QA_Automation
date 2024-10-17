class CreateClient{

    getClientsTab(){

        return cy.get(".styles__SideMenuWrapper-sc-xh2s93-4.dClqlN div")
    }

    getAddClientButton()
    {
        return cy.get('[data-testid="components_datatable_header_button_add-item"]')
    }
    getClientFirstName()
    {
        return cy.get('input[name="first_name"]')
    }
    getClientLastName()
    {
        return cy.get('input[name="last_name"]')
    }
    getClientPronouce()
    {
        return cy.get('input[name="preferred_pronoun"]')
    }
    getCallendar()
    {
        return cy.get('div[class="forms__FormSection-sc-t9y1rr-4 hmCSNv"]:nth-child(1)').find('div[class="styles__PopoverTrigger-sc-1f1tux3-0 faUqwj"]')
    }
    getBirthDate()
    {
        return cy.get('.bp3-popover-content').find(':nth-child(1) > :nth-child(5) > .rdp-button_reset')
    }
    getSubmitBirthdate()
    {
        return cy.get('.styles__SubmitButton-sc-1f1tux3-6')
    }
    getClientAddressField()
    {
        return cy.get('.forms__FormSection-sc-t9y1rr-4.hmCSNv:nth-child(2)').find('input[name="street_address"]')
    }
    getClientCity()
    {
        return cy.get('.forms__FormSection-sc-t9y1rr-4.hmCSNv:nth-child(2)').find('input[name="city"]')
    }
    getClientZipCodeField()
    {
        return cy.get('.forms__FormSection-sc-t9y1rr-4.hmCSNv:nth-child(2)').find('input[name="zip_code"]')
    }
    getCreateClientButton()
    {
        return cy.get('.Modal__Actions-sc-m5rli6-2 > :nth-child(2)')
    }
    getToastMessage()
    {
        return cy.get('.Toaster__AnimateContent-sc-10pk1v-0.feMjlG')
    }
    getCreatedClient()
    {
        return cy.get('.table-row.undefined.TableRow__Wrapper-sc-17fju35-0.cZWLjy').find('a[title="Smiths, Eva"]')
               
    }
    getCreatedClientCheckbox()
    {
        return cy.get('.Checkbox__Content-sc-t01l89-1.hlrWkY').eq(18)
    }
    getDeleteClientButton()
    {
        return cy.get('.Header__ActionsWrapper-sc-xfcimv-3.eBwHf button').contains('Delete')
    }
    getDeleteSelectedClientButton()
    {
        return cy.get('.Modal__Actions-sc-m5rli6-2.kqmGrI button').contains('I understand, delete client')
    }
    getConfirmDeleteClientButton()
    {
        return cy.get('.Modal__Actions-sc-m5rli6-2.kqmGrI button').contains('Confirm Delete Client')
    }



}
export default CreateClient