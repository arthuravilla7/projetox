const express = require('express');
const profissaoService = require('../api/services/profissaoService')
const profissionalService = require('../api/services/profissionalService')
const clienteService = require('../api/services/clienteService')
const atividadeService = require('../api/services/atividadeService')
const movimentoService = require('../api/services/movimentoService')
const empresaService = require('../api/services/empresaService')
const movimentoFollowUpService = require('../api/services/movimentoFollowUpService')
const authService = require('../api/services/authService')
const auth = require('./auth')

module.exports = function(server){

  /*
  * Rotas abertas
  */
  const openApi = express.Router()
  server.use('/oapi', openApi)
  openApi.post('/login', authService.login)
  openApi.post('/validateToken', authService.validateToken)
  openApi.post('/criarcliente', clienteService.criar)
  openApi.post('/criarempresa', empresaService.criar)

   //rota inicial
   openApi.get('/', function(req, res){
		res.status(200).render('index');
  })  

  /*
  * Rotas protegidas por JWT
  */
  const protectedApi = express.Router();
  server.use('/api', protectedApi);
  protectedApi.use(auth)

  protectedApi.route('/teste').get(function(req, res, next){
    res.status(200).json("Teste realizado com sucesso!");
  });
  //rotas de empresa
  //router.route('/criarempresa').post(empresaService.criar) rota aberta
  protectedApi.route('/atualizarempresa').post(empresaService.alterar)
  //rotas de cliente
  protectedApi.route('/obterclientes').get(clienteService.obterTodos)
  //router.route('/criarcliente').post(clienteService.criar) rota aberta
  protectedApi.route('/atualizarcliente').post(clienteService.alterar)
  //servico de profissao
  protectedApi.route('/obterprofissoes').get(profissaoService.obterTodos)
  protectedApi.route('/criarprofissao').post(profissaoService.criar)
  protectedApi.route('/atualizarprofissao').post(profissaoService.alterar)
  //servico de profissional
  protectedApi.route('/obterprofissionais').get(profissionalService.obterTodos)
  protectedApi.route('/obterprofissionaisporprofissao/:id').get(profissionalService.obterPorProfissao)
  protectedApi.route('/obterprofissionaisporempresa/:id').get(profissionalService.obterPorEmpresa)
  protectedApi.route('/criarprofissional').post(profissionalService.criar)
  protectedApi.route('/atualizarprofissional').post(profissionalService.alterar)
  //servico de atividade
  //router.route('/obteratividades').get(atividadeService.obterTodos)
  protectedApi.route('/criaratividade').post(atividadeService.criar)
  protectedApi.route('/obteratividadesporcliente/:id').get(atividadeService.obterTodosPorCliente)
  protectedApi.route('/obteratividadesporprofissional/:id').get(atividadeService.obterTodosPorProfissional)
  //servico de movimentos de atividades
  protectedApi.route('/criarmovimento').post(movimentoService.criar)
  //servico de follow up(acompanhamento de atividade)
  protectedApi.route('/criarfollowup').post(movimentoFollowUpService.criar)

};
