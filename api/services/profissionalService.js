const db = require('../../config/database');

db.profissional.obterTodos = function(req, res, next){
    db.profissional.findAll({
      attributes: ['id', 'nome', 'endereco', 'cpf', 'curriculo'],
      include:[
        {model: db.profissao}
      ]
    }).then(function(result){
      res.status(200).json(result)
    }, function(error){
      console.log(error);
    })
}

db.profissional.obterPorProfissao = function(req, res, next){
  db.profissional.findAll({
      where: {
        profissao_exercida :{
          $eq: req.params.id
        }
      },
      include:[
        {model: db.profissao},
        {model: db.empresa}
      ]
  }).then(function(result){
    res.status(200).json(result)
  }, function(error){
    console.log(error);
  })
}

db.profissional.obterPorEmpresa = function(req, res, next){
  db.profissional.findAll({
      where: {
        empresa_responsavel :{
          $eq: req.params.id
        }
      },
      include:[
        {model: db.profissao},
        {model: db.empresa}
      ]
  }).then(function(result){
    res.status(200).json(result)
  }, function(error){
    console.log(error);
  })
}

db.profissional.criar = function(req, res, next){
  db.profissional.create(req.body).then(function(result){
      res.status(200).json(result);
    }, function(error){
      console.log(error);
    })
}

db.profissional.alterar = function(req, res, next){
    db.profissional.update({
        nome: req.body.nome,
        endereco: req.body.endereco,
        cpf: req.body.cpf,
        curriculo: req.body.curriculo,
        profissao_exercida: req.body.profissao_exercida,
        empresa_responsavel: req.body.empresa_responsavel
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

module.exports = db.profissional;