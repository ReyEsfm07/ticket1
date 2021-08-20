const {DataTypes, Model} = require('sequelize');
const sequelize = require('./ConexionMSSQL');

const ConceptoCostosAdministrativos = sequelize.define('concepto_costos_administrativos',{
    id_concepto: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    concepto_costo_administrativo: {
        type: DataTypes.STRING(150),
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'fecha_registro',
    updatedAt: 'fecha_actualizacion'
});

module.exports = ConceptoCostosAdministrativos;