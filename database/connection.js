const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'salaodebeleza',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql'

    });

try {

    sequelize.authenticate();
    console.log("Conectado ao MYSQL!");
} catch (err) {
    console.log('Não foi posssível conectar:', err);
}

module.exports = sequelize;