const request = require('supertest');
const app = require('../../src/app');
const token = require('../../contents/contentsToken');
const {tipoDeficienciaIndexById,tipoDeficienciaIndex} = require('../../contents/contentsTipoDeficiencia');


describe('Testando insert de nova deficiência', () => {
    test('1.1 adicionando deficiência "Teste"', async () => {
        const res = await request(app).post('/tipodeficiencia').send({ nome: "Teste" });
        expect(res.body).toEqual({ message: "Deficiência cadastrada com sucesso!" });
    });
});

describe('Testando insert da mesma deficiência', () => {
    test('1.2 adicionando deficiência repetida "Teste"', async () => {
        const res = await request(app).post('/tipodeficiencia').send({ nome: "Teste" });
        expect(res.body).toEqual({ message: "Disability already registered!" });
    });
});

describe('Testando busca de deficiencia por ID', () => {
    test('1.3 buscando deficiência por id', async () => {
        const res = await request(app).get("/tipodeficiencia/619ec39508e77182a7d8b202").set('Authorization', token);
        expect(res.body).toEqual(tipoDeficienciaIndexById);
    });
});

describe('Testando listagem de todas as deficiencia', () => {
    test('1.4 list ALL', async () => {
        const res = await request(app).get("/tipodeficiencia");
        const result = res.body.slice(0,3);
        expect(result).toEqual(tipoDeficienciaIndex);
    });
});

describe('Testando remove da deficiência', () => {
    test('1.5 adicionando deficiência repetida "Teste"', async () => {
        const res = await request(app).delete("/tipodeficiencia/Teste");
        expect(res.body).toEqual({ message: "Deficiência apagada com sucesso!" });
    });
});