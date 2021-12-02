const request = require('supertest');
const app = require('../../src/app');
const { usuarioPCDIndex , usuarioPCDIndexByid } = require('../../contents/contentsUsuarioPCD');

describe('Testando insert de novo usuário PCD', () => {
    test('1.1 adicionando deficiência "Teste"', async () => {
        const res = await request(app).get('/usuariopcd');
        const result = res.body.slice(0, 3);
        expect(result).toEqual(usuarioPCDIndex);
    });
});

describe('Testando index by ID de usuário PCD', () => {
    test('1.2 indexByiD', async () => {
        const res = await request(app).get('/usuariopcd/619ec529479e6f0c1e74e8da');
        expect(res.body).toEqual(usuarioPCDIndexByid);
    });
});
