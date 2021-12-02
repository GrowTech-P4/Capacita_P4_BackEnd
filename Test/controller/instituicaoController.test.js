const request = require('supertest');
const app = require('../../src/app');
const {instituicaoIndexByid,instituicaoIndex} = require('../../contents/contentsInstituicao');



describe('Testando controller de instituicao', () => {
    test('1.1 buscando todos, testando index', async () => {
        const res = await request(app).get('/instituicao');
        const result = res.body.slice(0, 3);
        expect(result).toEqual(instituicaoIndex);
    });
});

describe('Testando controller de instituicao', () => {
    test('1.2 buscando por ID', async () => {
        const res = await request(app).get('/instituicao/61999778e6165937bd141888');
        expect(res.body).toEqual(instituicaoIndexByid);
    });
});

describe('Testando controller de instituicao', () => {
    test('1.2 buscando por ID', async () => {
        const res = await request(app).get('/instituicao/62999778e6165937bd141888');
        expect(res.body).toEqual({ message: "Instituicao not found!" });
    });
});