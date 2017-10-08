'use strict'

module.exports = (conexao, DataTypes) => {
  const Parcela = conexao.define('parcela', {
  id: {
    type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2), allowNull: false
  },
  data_pagamento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status_pagamento:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
  }
},{
  timestamps: false,
  freezeTableName: true,
  underscored: true
});

  return Parcela;
}