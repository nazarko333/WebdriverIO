import {
    assert
} from "chai";

describe('Page', () => {

    it('Check Title', () => {
        browser.url('https://gmatclub.com/');
        //const title = browser.getTitle();
        //console.log('Title is: ' + title);
        assert.equal(browser.getTitle(), "GMAT Club Forum - Best GMAT Tests, Books, Courses, Discounts with over 1,000,000 members");
    })




});