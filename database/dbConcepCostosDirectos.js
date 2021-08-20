const {DataTypes, Model} = require('sequelize');
const sequelize = require('./ConexionMSSQL');

const ConceptoCostosDirectos = sequelize.define('concepto_costos_directos',{
    id_concepto: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    concepto_costos_directos: {
        type: DataTypes.STRING(150),
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'fecha_registro',
    updatedAt: 'fecha_actualizacion'
});

module.exports = ConceptoCostosDirectos;