import * as getUsersId from '../requests/GETUsers.request'
import * as deleteUserById from '../requests/DELETEUsers.request'

let userDelet = [6]

describe('DELETE User', () => {
  it('Excluir usuário', () => {
    getUsersId.consultUser(userDelet).then(() => {
      deleteUserById.deleteUser(userDelet).should((resDeleteById) => {
        expect(resDeleteById.status).to.eq(200)
      })
    })
  });
});