const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');//faz o parse do body das requisicoes
const express = require('express');
const server = express(); //instancia do express
const allowCors = require('./cors');

server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json()); //parse de requisicoes com json como parametro
server.use(allowCors)//habilita o cors

server.use(express.static('public'));

server.listen(port, function(){
  console.log('Backend is running on port ' + port + '.');
});

module.exports = server;
