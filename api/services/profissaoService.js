const db = require('../../config/database');

db.profissao.obterTodos = function(req, res, next){
    db.profissao.findAll({
    }).then(function(result){
      res.status(200).json(result)
    }, function(error){
      console.log(error);
    })
}

db.profissao.alterar = function(req, res, next){
    db.profissao.update({
        nome: req.body.nome,
        descricao: req.body.descricao
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

db.profissao.salvar = function(req, res, next){
    db.profissao.create(req.body).then(function(result){
      res.status(200).json(result);
    }, function(error){
      console.log(error);
    })
}

module.exports = db.profissao;

