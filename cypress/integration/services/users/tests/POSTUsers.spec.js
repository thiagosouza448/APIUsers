import * as criarUsuario from '../requests/POSTUsers.request'


describe('POST Users', () => {
    it('criar usuário', () => {
        criarUsuario.postUsuario().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(10);
            expect(response.body.userName).to.be.eq('Giovani');
            expect(response.body.password).to.be.eq('Giovani123');
        });
    });
});