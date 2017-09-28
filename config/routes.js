const express = require('express');
const profissaoService = require('../api/services/profissaoService')
const profissionalService = require('../api/services/profissionalService')
const clienteService = require('../api/services/clienteService')

module.exports = function(server){

  //API routes
  const router = express.Router();
  server.use('/api', router);
  //rotas da API
  router.route('/teste').get(function(req, res, next){
    res.status(200).json("Teste realizado com sucesso!");
  });
  //rotas de cliente
  router.route('/obterclientes').get(clienteService.obterTodos)
  router.route('/criarcliente').post(clienteService.criar)
  router.route('/atualizarcliente').post(clienteService.alterar)
  //servico de profissao
  router.route('/obterprofissoes').get(profissaoService.obterTodos)
  router.route('/criarprofissao').post(profissaoService.criar)
  router.route('/atualizarprofissao').post(profissaoService.alterar)
  //servico de profissional
  router.route('/obterprofissionais').get(profissionalService.obterTodos)
  router.route('/criarprofissional').post(profissionalService.criar)
  router.route('/atualizarprofissional').post(profissionalService.alterar)
  

  //rota inicial
  router.get('/', function(req, res){
		res.status(200).render('index');
  })  
};
