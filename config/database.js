'use strict'

const Sequelize = require('sequelize');
const conexao = new Sequelize('projetotcc', 'root', 'maribibi', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      underscored: true
    }
});

// Connect all the models/tables in the database to a db object, 
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.conexao = conexao;

//models/tables
db.profissao = require('../api/model/profissao')(conexao, Sequelize)
db.profissional = require('../api/model/profissional')(conexao, Sequelize)

//relacionamentos
db.profissao.hasMany(db.profissional, {foreignKey: 'profissao_exercida'})
//User.belongsTo(Company, {foreignKey: 'fk_company'}); // Adds fk_company to User
db.profissional.belongsTo(db.profissao, {foreignKey: 'profissao_exercida'});

conexao.authenticate().then(() => { 
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;  