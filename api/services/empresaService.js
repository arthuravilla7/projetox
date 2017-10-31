const db = require('../../config/database');

db.empresa.obterTodos = function (req, res, next) {
    db.empresa.findAll({
    }).then(function (result) {
        res.status(200).json(result)
    }, function (error) {
        console.log(error);
    })
}

db.empresa.alterar = function (req, res, next) {
    db.empresa.update({
        nome: req.body.razao_social,
        nome_fantasia: req.body.nome_fantasia,
        responsavel: req.body.responsavel,
        area_atuacao: req.body.area_atuacao,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        celular: req.body.celular,
        cnpj: req.body.cnpj,
        email: req.body.email
    }, {
            where: {
                id: {
                    $eq: req.body.id
                }
            }
        }
    ).then(function (result) {
        res.status(200).json(result);
    }, function (error) {
        console.log(error);
    })
}

db.empresa.criar = function (req, res, next) {
    console.log(req.body)
    db.usuarioAcesso.create({
        login: req.body.email,
        senha: req.body.senha,
        perfil: 0,
        ativo: 1
    }).then(function (result) {
        var empresa = {
            razao_social: req.body.razao_social,
            nome_fantasia: req.body.nome_fantasia,
            responsavel: req.body.responsavel,
            area_atuacao: req.body.area_atuacao,
            endereco: req.body.area_atuacao,
            telefone: req.body.telefone,
            celular: req.body.celular,
            cnpj: req.body.cnpj,
            email: req.body.email,
            dados_acesso: result.id
        }
        db.empresa.create(empresa).then(function (result) {
            res.status(200).json(result);
        }, function (error) {
            db.usuarioAcesso.destroy({
                where: {
                    id: cliente.dados_acesso
                }
            });
            console.log(error.errors[0].message);
            res.status(500).json(error.errors[0].message);
        })
    }, function (error) {
        console.log(error.errors[0].message);
        res.status(500).json(error.errors[0].message);
    })
}

module.exports = db.empresa;

