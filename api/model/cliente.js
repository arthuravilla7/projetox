'use strict'

module.exports = (conexao, Sequelize) => {
  const Cliente = conexao.define('cliente', {
  id: {
    type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
  },
  nome: {
    type: Sequelize.STRING(50), allowNull: false
  },
  telefone: {
    type: Sequelize.STRING(15), allowNull: true
  },
  celular: {
    type: Sequelize.STRING(15), allowNull: false
  },
  cpf_cnpj: {
    type: Sequelize.STRING(20), allowNull: false
  },
  email: {
    type: Sequelize.STRING(45), allowNull: false
  }
},{
  timestamps: false,
  freezeTableName: true,
  underscored: true
});

  return Cliente;
}