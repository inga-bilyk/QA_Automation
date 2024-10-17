class Workflow{

    getWorkflowTabs()
    {
        return cy.get('.bp3-fill.bp3-text-overflow-ellipsis span')
        
    }
    getTabTitle()
    {
        return cy.get('.CardTitle__Title-sc-1boazl2-1.erayvF')
    }
    getTabDataSections()
    {
        return cy.get('.TableRowColumn__WrapSpan-sc-fsoayx-1.fbDvmN button')
    }
    getWorkflowSummaryTabs()
    {
        return cy.get('.Navigation__NavSection-sc-wmgnzc-2.shFXK summary')
    }

}

export default Workflow