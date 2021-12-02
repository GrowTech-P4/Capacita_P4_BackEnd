const request = require('supertest');
const app = require('../../src/app');
const { cursoIndex, cursoIndexById, idUsuario, cursoCreate } = require('../../contents/contentsCurso');
const token = require('../../contents/contentsToken');


describe('Testando controller de curso', () => {
    test('1.1 buscando todos, tentando index', async () => {
        const res = await request(app).get('/curso');
        const result = res.body.slice(0, 3);
        expect(result).toEqual(cursoIndex);
    });
});

describe('Testando controller de curso', () => {
    test('1.2 buscando um usuário por ID', async () => {
        const res = await request(app).get('/curso/619ee4ace4d9aee1a955d72e');
        expect(res.body).toEqual(cursoIndexById);
    });
});

describe('Testando controller de curso', () => {
    test('1.3 tentar cadastrar em curso que não existe', async () => {
        const res = await request(app).put('/curso/61a6cc6457bbc1c2966290f1').set('Authorization', token);;
        expect(res.body).toEqual({ message: "Curso not found!" });
    });
});

describe('Testando controller de curso', () => {
    test('1.4 tentar cadastrar usuário já inscrito', async () => {
        const res = await request(app).put('/curso/61a6cc6457bbc1c2966290f0').send(idUsuario).set('Authorization', token);
        expect(res.body).toEqual({ message: "User already entered!" });
    });
});

describe('Testando controller de curso', () => {
    test('1.5 tentar cadastrar curso em instituição que não existe', async () => {
        const res = await request(app).post('/curso/91a6cc1457bbc1c2966290f0');
        expect(res.body).toEqual({ message: "Instituiton not found!" });
    });
});

describe('Testando controller de curso', () => {
    test('1.6 Criando novo curso', async () => {
        const res = await request(app).post('/curso/61999778e6165937bd141888').send(cursoCreate);
        expect(res.body).toEqual(cursoCreate);
    });
});

describe('Testando controller de curso', () => {
    test('1.7 Apagando curso com nome que não existe', async () => {
        const res = await request(app).delete('/curso/91a6cc1457bbc1c2966290f0');
        expect(res.body).toEqual({message:"Curso not found!"});
    });
});

describe('Testando controller de curso', () => {
    test('1.8 Apagando curso com nome que existe', async () => {
        const res = await request(app).delete('/curso/RealizandoTesteParaOJestxxxx');
        expect(res.body).toEqual({message:"Curso deletado com sucesso!"});
    });
});

describe('Testando controller de curso', () => {
    test('1.9 procurando file sem Path', async () => {
        const res = await request(app).put('/curso/91a6cc1457bbc1c2966290f0/file')
        expect(res.body).toEqual({ message: "Cannot read property 'path' of undefined" });
    });
});

