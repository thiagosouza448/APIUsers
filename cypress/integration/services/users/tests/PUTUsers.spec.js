import * as putUsario from '../requests/PUTUsers.request'
import * as getUsers from '../requests/GETUsers.request'
import * as createUser from '../requests/POSTUsers.request'

const changeUser = [8]
const createChangeUser = [10]

describe('PUT Users', () => {
    it('alterar usuário', () => {
        getUsers.consultUser(changeUser).then((resUser) => {
            putUsario.changeUser(resUser.body.id).should((resChangeUser) => {
                expect(resChangeUser.status).to.eq(200);
                expect(resChangeUser.body.userName).to.eq('Giovani')
                expect(resChangeUser.body.password).to.eq('Giovani123')

            });
        });
    });
});


describe('POST e PUT', () => {
    it('Criar e alterar usuário', () => {
        createUser.postUsuario().then(() => {
            putUsario.changeUser(createChangeUser).should((resChangeUser) => {
                expect(resChangeUser.status).to.eq(200);
                expect(resChangeUser.body.userName).to.eq('Giovani')
                expect(resChangeUser.body.password).to.eq('Giovani123')

            });
        })

    });
});
