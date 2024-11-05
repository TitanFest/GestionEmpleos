// models/JobOffer.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const OfertasTrabajo = sequelize.define('OfertasTrabajo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    localización: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    salario: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: true,
        },
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    requerimientos: {
        type: DataTypes.TEXT,
        allowNull: true,
        get() {
            return this.getDataValue('requerimientos') 
                ? JSON.parse(this.getDataValue('requerimientos')) 
                : [];
        },
        set(value) {
            this.setDataValue('requerimientos', JSON.stringify(value));
        },
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'OfertasTrabajo', 
});

module.exports = OfertasTrabajo;
