import axios from "axios";
import { assert } from "chai";
import user from "../data/user.test";
let respCreate;
let id;
let respDelete;




describe("Create and delete users", function() {

    it("Create user", function() {
        browser.call(() => {
            return axios.post("https://reqres.in/api/users", user)
                .then(function(response) {
                    respCreate = response;
                    id = response.data.id;
                })
                .catch(function(error) {
                    console.log(error);
                });
        })

    })

    it("Create user status 201", function() {
        assert.equal(respCreate.status, 201);
    })

    it("Create user status text 'Created'", function() {
        assert.equal(respCreate.statusText, "Created");
    })

    it("Create user content-type 'application/json; charset=utf-8'", function() {
        assert.equal(respCreate.headers['content-type'], "application/json; charset=utf-8");
    })

    it("Create user check user name", function() {
        assert.equal(respCreate.data.name, user.name);
    })

    it("Create user check user job", function() {
        assert.equal(respCreate.data.job, user.job);
    })



    it("Delete user", function() {
        browser.call(() => {
            return axios.delete("https://reqres.in/api/users/" + id)
                .then(function(response) {
                    respDelete = response;
                })
                .catch(function(error) {
                    console.log(error);
                });
        })

    })

    it("Delete user check status 204", function() {
        assert.equal(respDelete.status, 204);
    })

    it("Delete user check status text 'No Content'", function() {
        assert.equal(respDelete.statusText, 'No Content');
    })

    it("Delete user check status text 'No Content'", function() {
        assert.equal(respDelete.headers["content-length"], 0);
    })

})