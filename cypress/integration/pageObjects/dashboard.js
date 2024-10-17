class Dashboard{
    getDashboardTabsNames()
    {
        return cy.get('.bp3-menu.bp3-large li')
    }
    getDashboardTabs()
    {
        return cy.get('.bp3-menu.bp3-large li span')
    }
    getDashboardExportButtons()
    {
        return cy.get('.Button__ButtonBase-sc-17zmp21-0')
    }

}

export default Dashboard