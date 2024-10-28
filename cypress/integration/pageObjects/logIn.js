class LogIn
{
getEmailField()
{
    return cy.get('input[name="username"]')
}
getPasswordField()
{
    return cy.get('input[name="password"]')
}
getSignInButton()
{
    return cy.get('button[type="button"]').contains('Sign In')
}
getUserNameValidation()
{
    return cy.get('div[class*="styles__UserName"]')
}

getHamburgerDropdown()
{
    //return cy.get('.Button__ButtonFlat-sc-17zmp21-1.jniHVF.Button__ButtonBase-sc-17zmp21-0.RthSp').eq(5)
    return cy.get('button[aria-label="more options"]')
}

getLogOutButton()
{
    return cy.get('.bp3-popover-content > .bp3-menu').contains('Sign out')
}



}
export default LogIn