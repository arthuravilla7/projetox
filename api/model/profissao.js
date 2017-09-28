'use strict'

module.exports = (conexao, Sequelize) => {
  const Profissao = conexao.define('profissao', {
  id: {
    type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
  },
  descricao: {
    type: Sequelize.TEXT, allowNull: false
  },
  nome : {
    type: Sequelize.STRING(45), allowNull: false
  }
},{
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,
  freezeTableName: true,
  underscored: true
});

  return Profissao;
}




