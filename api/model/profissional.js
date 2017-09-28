'use strict' //ler sobre

module.exports = (conexao, Sequelize) => {
    const Profissional = conexao.define('profissional', {
    id: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
    },
    nome : {
        type: Sequelize.STRING(100), allowNull: false
    },
    endereco : {
        type: Sequelize.STRING(150), allowNull: false
    },
    cpf : {
        type: Sequelize.STRING(11), allowNull: false
    },
    curriculo : {
        type: Sequelize.TEXT, allowNull: false
    }
},{
    timestamps: false,
    freezeTableName: true,
    underscored: true
});

    return Profissional;
}    
