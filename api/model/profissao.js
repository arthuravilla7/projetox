const conexao = require('../../config/database');
const Sequelize = require('sequelize');

const Profissao = conexao.define('profissao', {
  id: {
    type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
  },
  descricao: {
    type: Sequelize.TEXT, allowNull: false
  },
  nome : {
    type: Sequelize.STRING(45), allowNull: false
  },
},{
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,
  freezeTableName: true,
});

//Applying Item Table to database
conexao.sync({force:false})


module.exports = Profissao;

