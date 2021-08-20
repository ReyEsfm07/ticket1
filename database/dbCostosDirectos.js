const {DataTypes, Model} = require('sequelize');
const sequelize = require('./ConexionMSSQL');
const ConceptoCostosDirectos = require('./dbConcepCostosDirectos');
const VersionPresupuestos = require('./dbVersPresupuestos');
const Periodos = require('./dbPeriodos');

const CostosDirectos = sequelize.define('costos_directos',{
    id_costos_directos: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_concepto_costos_directos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    costos_directos_cantidad: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    id_periodo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_version_presupuesto: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'fecha_registro',
    updatedAt: 'fecha_actualizacion'
});

CostosDirectos.belongsTo(ConceptoCostosDirectos,{foreignKey: 'id_concepto_costos_directos'});
ConceptoCostosDirectos.hasMany(CostosDirectos,{foreignKey: 'id_concepto_costos_directos'});

CostosDirectos.belongsTo(Periodos,{foreignKey: 'id_periodo'});
Periodos.hasMany(CostosDirectos,{foreignKey: 'id_periodo'});

CostosDirectos.belongsTo(VersionPresupuestos,{foreignKey: 'id_version_presupuesto'});
VersionPresupuestos.hasMany(CostosDirectos,{foreignKey: 'id_version_presupuesto'});

module.exports = CostosDirectos;