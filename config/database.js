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
db.usuarioAcesso = require('../api/model/usuarioAcesso')(conexao, Sequelize)
db.profissao = require('../api/model/profissao')(conexao, Sequelize)
db.profissional = require('../api/model/profissional')(conexao, Sequelize)
db.cliente = require('../api/model/cliente')(conexao, Sequelize)
db.atividade = require('../api/model/atividade')(conexao, Sequelize)
db.movimento = require('../api/model/movimento')(conexao, Sequelize)
db.empresa = require('../api/model/empresa')(conexao, Sequelize)
db.parcela = require('../api/model/parcela')(conexao, Sequelize)
db.movimentoFollowUp = require('../api/model/movimentoFollowUp')(conexao, Sequelize)

//relacionamentos
db.cliente.belongsTo(db.usuarioAcesso, { foreignKey: 'dados_acesso' })
db.profissional.belongsTo(db.usuarioAcesso, { foreignKey: 'dados_acesso' })
db.empresa.belongsTo(db.usuarioAcesso, { foreignKey: 'dados_acesso' })

db.profissao.hasMany(db.profissional, { foreignKey: 'profissao_exercida' })
db.profissional.belongsTo(db.profissao, { foreignKey: 'profissao_exercida' })
//atividade - profissional
db.profissional.hasMany(db.atividade, { foreignKey: 'profissional_responsavel' })
db.atividade.belongsTo(db.profissional, { foreignKey: 'profissional_responsavel' })
//atividade - cliente
db.cliente.hasMany(db.atividade, { foreignKey: 'cliente_responsavel' })
db.atividade.belongsTo(db.cliente, { foreignKey: 'cliente_responsavel' })
//atividade - movimento
db.atividade.hasMany(db.movimento, { foreignKey: 'atividade_responsavel' })
db.movimento.belongsTo(db.atividade, { foreignKey: 'atividade_responsavel' })
//parcela - atividade
db.atividade.hasMany(db.parcela, { foreignKey: 'atividade_responsavel' })
db.parcela.belongsTo(db.atividade, { foreignKey: 'atividade_responsavel' })
//empresa - profissional
db.empresa.hasMany(db.profissional, { foreignKey: 'empresa_responsavel' })
db.profissional.belongsTo(db.empresa, { foreignKey: 'empresa_responsavel' })
//movimentoFollowUp - movimento
db.movimento.hasMany(db.movimentoFollowUp, { foreignKey: 'movimento_responsavel' })
db.movimentoFollowUp.belongsTo(db.movimento, { foreignKey: 'movimento_responsavel' })



conexao.authenticate().then(() => {
  console.log('Connection has been established successfully.');
})
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;  