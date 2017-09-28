const Sequelize = require('sequelize');
const conexao = new Sequelize('projetotcc', 'root', 'maribibi', {
    host: 'localhost',
    dialect: 'mysql',
});

conexao.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = conexao;