const db = require('../../config/database');

db.cliente.obterTodos = function (req, res, next) {
    db.cliente.findAll({
    }).then(function (result) {
        res.status(200).json(result)
    }, function (error) {
        console.log(error);
    })
}

db.cliente.alterar = function (req, res, next) {
    db.cliente.update({
        nome: req.body.nome,
        telefone: req.body.telefone,
        celular: req.body.celular,
        cpf_cnpj: req.body.cpf_cnpj,
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

db.cliente.criar = function (req, res, next) {
    console.log(req.body)
    db.usuarioAcesso.create({
        login: req.body.login,
        senha: req.body.senha,
        perfil: 2,
        ativo: req.body.ativo
    }).then(function (result) {
        var cliente = {
            nome: req.body.nome,
            telefone: req.body.telefone,
            celular: req.body.celular,
            cpf_cnpj: req.body.cpf_cnpj,
            email: req.body.login,
            dados_acesso: result.id
        }
        db.cliente.create(cliente).then(function (result) {
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

module.exports = db.cliente;

