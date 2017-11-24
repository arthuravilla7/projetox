const db = require('../../config/database');

db.movimentoFollowUp.criar = function(req, res, next){
    db.movimentoFollowUp.create(req.body).then(function(result){
      res.status(200).json(result);
    }, function(error){
      console.log(error);
    })
}

module.exports = db.movimentoFollowUp