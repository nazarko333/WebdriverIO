import { assert } from "chai";
import sel from "../selectors/login.sel"
import exp from "../expected/login.exp"


class Login {

    open() {
        browser.url("https://gmatclub.com/forum/ucp.php?mode=login");
        $(sel.logo).waitForDisplayed();
    }

    logoDisplayed() {
        $(sel.logo).isDisplayed();
    }

    formDisplayed() {
        $(sel.form).isDisplayed();
    }

    resendDisplayed() {
        $(sel.resend).isDisplayed();
    }

    logoAlignment() {
        let textAlign = $(sel.form).getCSSProperty("text-align");
        assert.equal(textAlign.value, exp.logoAlign);
    }

    formWidth() {
        let formWidth = $(sel.form).getCSSProperty("width");
        assert.equal(formWidth.value, exp.formWidth);
    }




}

export default new Login();