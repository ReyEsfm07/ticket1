const {DataTypes, Model} = require('sequelize');
const sequelize = require('./ConexionMSSQL');
const ConceptoCostosAdministrativos = require('./dbConcepCostosAdmin');
const VersionPresupuestos = require('./dbVersPresupuestos');
const Periodos = require('./dbPeriodos');

const CostosAdministrativos = sequelize.define('costos_administrativos',{
    id_costos_administrativos: {
        primaryKey: true,
        autoIncrement: true, 
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_concepto_costos_administrativos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    costos_administrativos_cantidad: {
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

CostosAdministrativos.belongsTo(ConceptoCostosAdministrativos,{foreignKey: 'id_concepto_costos_administrativos'});
ConceptoCostosAdministrativos.hasMany(CostosAdministrativos,{foreignKey: 'id_concepto_costos_administrativos'});

CostosAdministrativos.belongsTo(Periodos,{foreignKey: 'id_periodo'});
Periodos.hasMany(CostosAdministrativos,{foreignKey: 'id_periodo'});

CostosAdministrativos.belongsTo(VersionPresupuestos,{foreignKey: 'id_version_presupuesto'});
VersionPresupuestos.hasMany(CostosAdministrativos,{foreignKey: 'id_version_presupuesto'});


module.exports = CostosAdministrativos;