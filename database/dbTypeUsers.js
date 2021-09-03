// Importar los mudulos necesarios a utilizar
const {DataTypes, Model} = require('sequelize');
const sequelize = require('./ConexionMSSQL');
const Usuarios = require('./dbUsers')

const TipoUsuarios = sequelize.define('tipo_de_usuarios',{
    id_tipo_usuario: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo_usuarios:{
        type: DataTypes.STRING(25),
        allowNull: false
    }
}, {
    timestamps: false
});

Usuarios.belongsTo(TipoUsuarios,{foreignKey: 'id_tipo_usuario'});
TipoUsuarios.hasMany(Usuarios,{foreignKey: 'id_tipo_usuario'});


module.exports = TipoUsuarios