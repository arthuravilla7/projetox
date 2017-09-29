'use strict'

module.exports = (conexao, DataTypes) => {
  const Atividade = conexao.define('atividade', {
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
  },
  valor_contratado: {
    type: DataTypes.DECIMAL(10, 2), allowNull: false
  }
},{
  timestamps: false,
  freezeTableName: true,
  underscored: true
});

  return Atividade;
}