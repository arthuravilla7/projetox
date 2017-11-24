const db = require('../../config/database');

db.movimento.criar = function(req, res, next){
    console.log(req.body);
    db.movimento.create(req.body).then(function(result){
      res.status(200).json(result);
    }, function(error){
      console.log(error);
    })
}

module.exports = db.movimento