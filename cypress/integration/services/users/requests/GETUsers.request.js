/// <reference types="cypress" />

export { listUser }
export { consultUser }


function listUser() {
    return cy.request({
        method: 'GET',
        url: 'Users',
        failOnStatusCode: false
    });
}

function consultUser(idUser) {
    return cy.request({
        method: 'GET',
        url: `Users/${idUser}`,
        headers: {
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
    });
}