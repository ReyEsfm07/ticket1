const {DataTypes, Model} = require('sequelize');
const sequelize = require('./ConexionMSSQL');
const ConceptoIngresos = require('./dbConcepIngresos');
const VersionPresupuestos = require('./dbVersPresupuestos');
const Periodos = require('./dbPeriodos');

const Ingresos = sequelize.define('ingresos',{
    id_ingresos: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_concepto_ingresos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ingresos_cantidad: {
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

Ingresos.belongsTo(ConceptoIngresos,{foreignKey: 'id_concepto_ingresos'});
ConceptoIngresos.hasMany(Ingresos,{foreignKey: 'id_concepto_ingresos'});
 
Ingresos.belongsTo(Periodos,{foreignKey: 'id_periodo'});
Periodos.hasMany(Ingresos,{foreignKey: 'id_periodo'});

Ingresos.belongsTo(VersionPresupuestos,{foreignKey: 'id_version_presupuesto'});
VersionPresupuestos.hasMany(Ingresos,{foreignKey: 'id_version_presupuesto'});

module.exports = Ingresos;