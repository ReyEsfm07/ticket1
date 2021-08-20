const {DataTypes, Model} = require('sequelize');
const sequelize = require('./ConexionMSSQL');
const Usuarios = require('./dbUsers');
const Proyectos = require('./dbProyectos');

const VersionPresupuestos = sequelize.define('version_de_presupuestos',{
    id_version_presupuesto:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    version:{
        type: DataTypes.STRING(5),
        allowNull: false
    },
    id_proyecto:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_usuario:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'fecha_creacion',
    updatedAt: 'fecha_actualizacion'
});

VersionPresupuestos.belongsTo(Proyectos,{foreignKey: 'id_proyecto'});
Proyectos.hasMany(VersionPresupuestos,{foreignKey: 'id_proyecto'});

VersionPresupuestos.belongsTo(Usuarios,{foreignKey: 'id_usuario'});
Usuarios.hasMany(VersionPresupuestos,{foreignKey: 'id_usuario'});


module.exports = VersionPresupuestos;