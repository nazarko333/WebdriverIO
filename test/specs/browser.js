import assert from "assert";

describe("Browser", function() {

    it("Tab title", function() {
        browser.url("https://deepinspire.com/");
        browser.pause(2000);
        let title = browser.getTitle();
        assert.equal(title, "DeepInspire | Software Development & Product UX/UI Design");
    })

    /*

    it("Header is displayed", function() {




    })

    it("Footer is displayed", function() {




    })

    */

});