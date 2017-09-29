const db = require('../../config/database');

db.atividade.obterTodos = function(req, res, next){
    db.atividade.findAll({
        include:[
            {model: db.profissional},
            {model: db.cliente}
        ]
    }).then(function(result){
      res.status(200).json(result)
    }, function(error){
      console.log(error);
    })
}

db.atividade.criar = function(req, res, next){
    db.atividade.create(req.body).then(function(result){
      res.status(200).json(result);
    }, function(error){
      console.log(error);
    })
}

module.exports = db.atividade;

