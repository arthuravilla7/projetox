const profissao = require('../model/profissao')

profissao.obterTodos = function(req, res, next){
    profissao.findAll().then(function(result){
      res.status(200).json(result)
    }, function(error){
      console.log(error);
    })
}

profissao.alterar = function(req, res, next){
    profissao.update({
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

profissao.salvar = function(req, res, next){
    profissao.create(req.body).then(function(result){
      res.status(200).json(result);
    }, function(error){
      console.log(error);
    })
}

module.exports = profissao;

