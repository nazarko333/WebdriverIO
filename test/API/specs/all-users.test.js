import axios from "axios";
import { assert } from "chai";
let resp;


describe("Test People", function() {

    it("Data", function() {
        browser.call(() => {
            return axios.get(browser.config.baseUrl + "people")
                .then(function(response) {
                    resp = response.data;
                })
                .catch(function(error) {
                    resp = error;
                })
        })

    })

    it("Response is Object", function() {
        assert.isTrue(resp instanceof Object);
    })

    it("Object is not empty", function() {
        assert.isTrue(resp.results.length > 0);
    })

    it("Elements are objects", function() {

        let allObjects = true
        for (let i = 0; i < resp.results.length; i++) {
            if (!(resp.results[i] instanceof Object && resp.results[i] !== null && !Array.isArray(resp.results[i]))) {
                allObjects = false;

            }
        }

        assert.isTrue(allObjects);

    })

})