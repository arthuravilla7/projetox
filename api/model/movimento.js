'use strict'

module.exports = (conexao, DataTypes) => {
  const Movimento = conexao.define('movimento', {
  id: {
    type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT, allowNull: false
  },
  data_criacao: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
},{
  timestamps: false,
  freezeTableName: true,
  underscored: true
});

  return Movimento;
}