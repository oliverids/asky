const Sequelize = require('sequelize'),
    connection = new Sequelize(process.env.DATABASE_URL, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
        host: 'us-cdbr-east-05.cleardb.net',
        dialect: 'mysql'
    });

//locally
// const Sequelize = require('sequelize'),
//     connection = new Sequelize('guiaperguntas', 'root', 'cizorodesi', {
//         host: 'localhost',
//         dialect: 'mysql'
//     });

module.exports = connection;