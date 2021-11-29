const cursoCertify = require('./curso');

const cursoValidate = async (curso) => {
    await cursoCertify.validate({
        nome: curso.nome,
        descricao: curso.descricao,
        cargaHoraria: curso.cargaHoraria,
        tipoDeficiencia: curso.tipoDeficiencia,
        duracao: curso.duracao,
        valor: curso.valor,
        dataConclusao: curso.dataConclusao
    });
}

module.exports = { cursoValidate }