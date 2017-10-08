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
//criar obter movimento por id

db.movimentoFollowUp.criar = function(req, res, next){
    db.movimentoFollowUp.create(req.body).then(function(result){
      res.status(200).json(result);
    }, function(error){
      console.log(error);
    })
}

module.exports = db.movimentoFollowUp