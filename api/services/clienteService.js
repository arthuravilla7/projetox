const db = require('../../config/database');

db.cliente.obterTodos = function(req, res, next){
    db.cliente.findAll({
    }).then(function(result){
      res.status(200).json(result)
    }, function(error){
      console.log(error);
    })
}



db.cliente.alterar = function(req, res, next){
    db.cliente.update({
        nome: req.body.nome,
        telefone: req.body.telefone,
        celular: req.body.celular,
        cpf_cnpj: req.body.cpf_cnpj,
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

db.cliente.criar = function(req, res, next){
    console.log(req.body)
    db.cliente.create(req.body).then(function(result){
      res.status(200).json(result);
    }, function(error){
      console.log(error);
    })
}

module.exports = db.cliente;

