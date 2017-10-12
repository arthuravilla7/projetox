'use strict'

module.exports = (conexao, DataTypes) => {
  const usuarioAcesso = conexao.define('usuario_acesso', {
  id: {
    type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
  },
  login: {
    type: DataTypes.STRING(50), unique: true, allowNull: false
  },
  senha: {
    type: DataTypes.STRING(45), allowNull: true
  },
  perfil: {
    type: DataTypes.INTEGER, allowNull: false //0 empresa, 1 profissional, 2 cliente
  },
  ativo: {
    type: DataTypes.INTEGER, allowNull: false
  }
},{
  timestamps: false,
  freezeTableName: true,
  underscored: true
});

  return usuarioAcesso;
}