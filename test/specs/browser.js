import assert from "assert";

describe('Page', () => {

    it('Check Title', () => {
        browser.url('https://gmatclub.com/');
        browser.pause(2000);
        //const title = browser.getTitle();
        //console.log('Title is: ' + title);
        assert.equal(browser.getTitle(), "GMAT Club Forum - Best GMAT Tests, Books, Courses, Discounts with over 1,000,000 members");
    })




});