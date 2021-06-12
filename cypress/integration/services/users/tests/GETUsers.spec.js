import * as getUsers from '../requests/GETUsers.request'
import * as getUsersId from '../requests/GETUsers.request'

const userById = [5]

describe('GET Users', () => {
    it('Listar usuários', () => {
        getUsers.listUser().should((response) => {
            expect(response.body[0].id).to.eq(1);
            expect(response.body[0].userName).to.eq('User 1');
            expect(response.body[0].password).to.eq('Password1');
        });
    });
});

describe('listar o usuario pelo id', () => {
    it('Listar usuario', () => {
        getUsersId.consultUser(userById).should((responseConsult) => {
            expect(responseConsult.status).to.eq(200)
        })
    })
})
