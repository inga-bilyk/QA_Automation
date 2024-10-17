class ClinicGeneral
{
    getClinicTabs()
    {
        return cy.get('.styles__NavItem-sc-xh2s93-3.fXBiLB div')
    }
    getSelectClientFromClientTab()
    {
        return cy.get('.bp3-fill > :nth-child(1) > .ClientCodeBlock__Wrapper-sc-zzoprq-4')
    }

}
export default ClinicGeneral