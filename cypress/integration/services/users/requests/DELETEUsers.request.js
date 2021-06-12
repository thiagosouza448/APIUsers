/// <reference types="cypress" />

export { deleteUser }

const deleteUsersPayload = require('../payloads/delete-user.json')

function deleteUser(idUser) {
    return cy.request({
        method: 'DELETE',
        url: `Users/${idUser}`,
        headers: {
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: deleteUsersPayload
    });
}