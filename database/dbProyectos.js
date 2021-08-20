const {DataTypes, Model} = require('sequelize');
const sequelize = require('./ConexionMSSQL');

const Proyectos = sequelize.define('proyectos',{
    id_proyecto: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    proyecto_nombre: {
        type: DataTypes.STRING(150),
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'fecha_creacion',
    updatedAt: 'fecha_actualizacion'
});

module.exports = Proyectos;