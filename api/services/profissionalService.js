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
  db.usuarioAcesso.create({
    login: req.body.login,
    senha: req.body.senha,
    perfil: 1,
    ativo: req.body.ativo
  }).then(function(result){
    var profissional = {
      nome: req.body.nome,
      endereco: req.body.endereco,
      cpf: req.body.cpf,
      curriculo: req.body.curriculo,
      telefone: req.body.telefone,
      celular: req.body.celular,
      email: req.body.login,
      dados_acesso: result.id,
      empresa_responsavel: req.body.empresa_responsavel,
      profissao_exercida: req.body.profissao_exercida
    }
    db.profissional.create(profissional).then(function(result){
      res.status(200).json(result)
    }, function(error){
        db.usuarioAcesso.destroy({
          where: {
            id: profissional.dados_acesso
          }
    });
      console.log(error);
      res.status(500).json(error);
    })
  },function(error){
      console.log(error.errors[0].message);
      res.status(500).json(error.errors[0].message);
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