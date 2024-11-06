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
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    localizacion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    horario: {
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
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    requerimientos: {
        type: DataTypes.JSON,
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
