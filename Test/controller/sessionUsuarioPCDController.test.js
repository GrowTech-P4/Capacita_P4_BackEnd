const request = require('supertest');
const app = require('../../src/app');
const { userPasswordInvalid, userEmailInvalid } = require('../../contents/contentsSession');


describe('Testando login de usuário PCD', () => {
    test('1.1 login de email incorreto', async () => {
        const res = await request(app).post('/login').send(userEmailInvalid);
        expect(res.body).toEqual({ message: "E-mail not found!" });
    });
});


describe('Testando login de usuário PCD', () => {
    test('1.1 login de senha incorreta', async () => {
        const res = await request(app).post('/login').send(userPasswordInvalid);
        expect(res.body).toEqual({ message: "Password does not match!" });
    });
});

