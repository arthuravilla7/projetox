'use strict'

module.exports = (conexao, DataTypes) => {
  const Empresa = conexao.define('empresa', {
  id: {
    type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
  },
  razao_social : {
    type: DataTypes.STRING(100), allowNull: false
  },
  nome_fantasia : {
    type: DataTypes.STRING(100), allowNull: false
  },
  responsavel : {
    type: DataTypes.STRING(50), allowNull: false
  },
  area_atuacao : {
    type: DataTypes.STRING(50), allowNull: false
  },
  endereco : {
    type: DataTypes.STRING(150), allowNull: false
  },
  telefone: {
    type: DataTypes.STRING(15), allowNull: true
  },
  celular: {
    type: DataTypes.STRING(15), allowNull: false
  },
  cnpj : {
    type: DataTypes.STRING(11), allowNull: false
  },
  email: {
    type: DataTypes.STRING(45), allowNull: false
  }
},{
  timestamps: false,
  freezeTableName: true,
  underscored: true
});

  return Empresa;
}