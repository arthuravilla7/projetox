const db = require('../../config/database');

db.profissional.obterTodos = function(req, res, next){
    db.profissional.findAll({
      attributes: ['id ', 'nome', 'endereco', 'cpf', 'curriculo'],
      include:[
        {model: db.profissao}
      ]
    }).then(function(result){
      res.status(200).json(result)
    }, function(error){
      console.log(error);
    })
}

module.exports = db.profissional;