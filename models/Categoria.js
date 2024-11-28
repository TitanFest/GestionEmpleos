const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Categoria = sequelize.define('Categoria', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    }}, 
    { 
        tableName : 'categoria'
    });

module.exports = Categoria;