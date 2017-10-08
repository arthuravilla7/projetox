const express = require('express');
const profissaoService = require('../api/services/profissaoService')
const profissionalService = require('../api/services/profissionalService')
const clienteService = require('../api/services/clienteService')
const atividadeService = require('../api/services/atividadeService')
const movimentoService = require('../api/services/movimentoService')
const empresaService = require('../api/services/empresaService')
const movimentoFollowUpService = require('../api/services/movimentoFollowUpService')

module.exports = function(server){

  //API routes
  const router = express.Router();
  server.use('/api', router);
  //rotas da API
  router.route('/teste').get(function(req, res, next){
    res.status(200).json("Teste realizado com sucesso!");
  });
  //rotas de empresa
  router.route('/criarempresa').post(empresaService.criar)
  router.route('/atualizarempresa').post(empresaService.alterar)
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
  router.route('/obterprofissionaisporprofissao/:id').get(profissionalService.obterPorProfissao)
  router.route('/obterprofissionaisporempresa/:id').get(profissionalService.obterPorEmpresa)
  router.route('/criarprofissional').post(profissionalService.criar)
  router.route('/atualizarprofissional').post(profissionalService.alterar)
  //servico de atividade
  //router.route('/obteratividades').get(atividadeService.obterTodos)
  router.route('/criaratividade').post(atividadeService.criar)
  router.route('/obteratividadesporcliente/:id').get(atividadeService.obterTodosPorCliente)
  router.route('/obteratividadesporprofissional/:id').get(atividadeService.obterTodosPorProfissional)
  //servico de movimentos de atividades
  router.route('/criarmovimento').post(movimentoService.criar)
  //servico de follow up(acompanhamento de atividade)
  router.route('/criarfollowup').post(movimentoFollowUpService.criar)

  //rota inicial
  router.get('/', function(req, res){
		res.status(200).render('index');
  })  
};
