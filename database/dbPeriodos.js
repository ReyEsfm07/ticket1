// Importar los mudulos necesarios a utilizar
const {DataTypes, Model} = require('sequelize');
const sequelize = require('./ConexionMSSQL');
const VersionPresupuestos = require('./dbVersPresupuestos');

const Periodos = sequelize.define('periodos',{
    id_periodo:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    periodo:{
        type: DataTypes.STRING(15),
        allowNull: false
    },
    id_version_presupuesto:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'fecha_registro',
    updatedAt: 'fecha_actualizacion'
});

Periodos.belongsTo(VersionPresupuestos,{foreignKey: 'id_version_presupuesto'});
VersionPresupuestos.hasMany(Periodos,{foreignKey: 'id_version_presupuesto'});

module.exports = Periodos;