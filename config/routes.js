const express = require('express');
const profissaoService = require('../api/services/profissaoService')

module.exports = function(server){

  //API routes
  const router = express.Router();
  server.use('/api', router);
  //rotas da API
  router.route('/teste').get(function(req, res, next){
    res.status(200).json("Teste realizado com sucesso!");
  });
  //servico de profissoes
  router.route('/obterprofissoes').get(profissaoService.obterTodos)
  router.route('/criarprofissao').post(profissaoService.salvar)
  router.route('/atualizarprofissao').post(profissaoService.alterar)


  //rota inicial
  router.get('/', function(req, res){
		res.status(200).render('index');
  })  
};
