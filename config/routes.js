const express = require('express');
const profissaoService = require('../api/services/profissaoService')
const profissionalService = require('../api/services/profissionalService')

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
  //servico de profissionais
  router.route('/obterprofissionais').get(profissionalService.obterTodos)

  //rota inicial
  router.get('/', function(req, res){
		res.status(200).render('index');
  })  
};
