const Sequelize = require('sequelize'),
    connection = require('./database');

const Resposta = connection.define('respostas', {
    autor: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    foto: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Resposta.sync({force: false}).then(() => {});

module.exports = Resposta;