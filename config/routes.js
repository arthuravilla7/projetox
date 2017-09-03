const express = require('express');

module.exports = function(server){

  //API routes
  const router = express.Router();
  server.use('/api', router);

  //rotas da API

  router.route('/teste').get(function(req, res, next){
    res.status(200).json("Teste realizado com sucesso!");
  });

  //rota inicial
  router.get('/', function(req, res){
		res.status(200).render('index');
  })  
};
