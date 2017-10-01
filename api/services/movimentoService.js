const db = require('../../config/database');

/*db.movimento.obterTodosPorAtividade = function(req, res, next){
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
}*/

db.movimento.criar = function(req, res, next){
    db.movimento.create(req.body).then(function(result){
      res.status(200).json(result);
    }, function(error){
      console.log(error);
    })
}

module.exports = db.movimento