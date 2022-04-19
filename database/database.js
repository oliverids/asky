const Sequelize = require('sequelize'),
    connection = new Sequelize(process.env.DATABASE_URL, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
        host: 'us-cdbr-east-05.cleardb.net',
        dialect: 'mysql'
    });

module.exports = connection;