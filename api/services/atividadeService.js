const db = require('../../config/database');

/*db.atividade.obterTodos = function(req, res, next){
    db.atividade.findAll({
        include:[
            {model: db.movimento},
            {model: db.profissional},
            {model: db.cliente}
        ]
    }).then(function(result){
      res.status(200).json(result)
    }, function(error){
      console.log(error);
    })
}*/

db.atividade.criar = function(req, res, next){
    db.atividade.create(req.body).then(function(result){
      res.status(200).json(result);
    }, function(error){
      console.log(error);
    })
}

db.atividade.obterTodosPorCliente = function(req, res, next){
    db.atividade.findAll({
        where: {
          cliente_responsavel: req.params.id
        },
        include:[
            {model: db.movimento},
            {model: db.profissional},
            {model: db.cliente},
            {model: db.parcela}
        ]
    }).then(function(result){
      res.status(200).json(result)
    }, function(error){
      console.log(error);
    })
}


db.atividade.obterTodosPorProfissional = function(req, res, next){
    db.atividade.findAll({
        where: {
          profissional_responsavel: req.params.id
        },
        include:[
            {model: db.movimento},
            {model: db.profissional},
            {model: db.cliente}
        ]
    }).then(function(result){
      res.status(200).json(result)
    }, function(error){
      console.log(error);
    })
}

db.atividade.obterTodosPorEmpresa = function(req, res, next){
  console.log(req.params);
  db.atividade.findAll({
      include:[
          {model: db.movimento},
          {model: db.profissional},
          {model: db.cliente}
      ],
      where: {
        '$profissional.empresa_responsavel$' :{$eq: req.params.id}
      }
  }).then(function(result){
    res.status(200).json(result)
  }, function(error){
    console.log(error);
  })
}

module.exports = db.atividade;
