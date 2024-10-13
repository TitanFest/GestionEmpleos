// database.js

const { Sequelize } = require('sequelize');
require('dotenv').config();

// Crea una nueva instancia de Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,       // Cambia esto si tu base de datos está en otro host
    dialect: 'mariadb',      // Especifica el dialecto de la base de datos
    dialectModule: require('mariadb'), // Especifica el módulo del dialecto
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false,          // Desactiva el logging si lo prefieres
});

// Función para probar la conexión
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
};

// Exporta la instancia de Sequelize y la función de prueba
module.exports = { sequelize, testConnection };
