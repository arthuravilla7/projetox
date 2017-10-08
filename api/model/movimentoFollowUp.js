'use strict'

module.exports = (conexao, DataTypes) => {
  const MovimentoFollowUp = conexao.define('movimento_follow_up', {
  id: {
    type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
  },
  descricao:{
    type: Sequelize.TEXT, allowNull: false,
  },
  data_execucao: {
    type: DataTypes.DATE, allowNull: false,
  }
},{
  timestamps: false,
  freezeTableName: true,
  underscored: true
});

  return MovimentoFollowUp;
}