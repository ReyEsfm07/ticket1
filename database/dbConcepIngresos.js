const {DataTypes, Model} = require('sequelize');
const sequelize = require('./ConexionMSSQL');

const ConceptoIngresos = sequelize.define('concepto_ingresos',{
    id_concepto: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    concepto_ingresos: {
        type: DataTypes.STRING(150),
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'fecha_registro',
    updatedAt: 'fecha_actualizacion'
});

module.exports = ConceptoIngresos;