const db = require('../../config/database');

db.empresa.obterTodos = function(req, res, next){
    db.empresa.findAll({
    }).then(function(result){
      res.status(200).json(result)
    }, function(error){
      console.log(error);
    })
}

db.empresa.alterar = function(req, res, next){
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
    },  {
            where: {
                id: {
                    $eq: req.body.id
                }
            }
        }
    ).then(function(result){
      res.status(200).json(result);
    }, function(error){
      console.log(error);
    })
}

db.empresa.criar = function(req, res, next){
    db.empresa.create(req.body).then(function(result){
      res.status(200).json(result);
    }, function(error){
      console.log(error);
    })
}

module.exports = db.empresa;

