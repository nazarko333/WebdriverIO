import login from "../pages/login.page"

describe('Login', () => {

    it('Page-displayed', () => {
        login.open();
    })

    it('Logo-displayed', () => {
        login.logoDisplayed();
    })

    it('Form-displayed', () => {
        login.formDisplayed();
    })

    it('Resend-displayed', () => {
        login.resendDisplayed();
    })

    it('Login-in-center', () => {
        login.logoAlignment();
    })

    it('Form-width', () => {
        login.formWidth();
    })








});