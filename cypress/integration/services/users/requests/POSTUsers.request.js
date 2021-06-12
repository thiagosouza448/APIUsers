/// <reference types="cypress" />

export { postUsuario }

const payloadAddUser = require('../payloads/add-user.json');


function postUsuario() {
    return cy.request({
        method: 'POST',
        url: 'Users',
        failOnStatusCode: false,
        body: payloadAddUser
    });
}