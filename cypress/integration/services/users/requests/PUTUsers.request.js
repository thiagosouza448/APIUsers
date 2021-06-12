/// <reference types="cypress" />

export { changeUser }

const changeUserPayload = require('../payloads/change-user.json')

function changeUser(idUser) {
    return cy.request({
        method: 'PUT',
        url: `Users/${idUser}`,
        headers: {
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: changeUserPayload
    });
}