const Sequelize = require('sequelize'),
    connection = require('./database');

const Pergunta = connection.define('perguntas', {
    //STRING são textos curtos, TEXT textos longos
    autor: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({force: false}).then(() => {});

module.exports = Pergunta;