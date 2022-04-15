const Sequelize = require('sequelize'),
    connection = new Sequelize('guiaperguntas', 'root', 'cizorodesi', {
        host: 'localhost',
        dialect: 'mysql'
    });

module.exports = connection;