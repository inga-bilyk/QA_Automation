class Settings{

    getSettingsTabs()
    {
        return cy.get('.bp3-fill.bp3-text-overflow-ellipsis')
    }
    getSettingsTabTitle()
    {
        return cy.get('.CardTitle__Title-sc-1boazl2-1.erayvF')
    }
    getSettingsTabsSpan()
    {
        return cy.get('.bp3-fill.bp3-text-overflow-ellipsis span')
    }

}

export default Settings