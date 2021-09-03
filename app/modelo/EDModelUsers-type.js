const UsersDB = require("../../database/dbUsers")
const TypeUsersDB = require("../../database/dbTypeUsers")



let BuscarUsers_TypeUsers = async() =>{
    try {

        
        let  Users_TypeUsers  = await UsersDB.findAll({attributes:['id_tipo_usuario','nombres','apellidos'],
        include:[{model:TypeUsersDB,attributes:['tipo_usuarios'],required:true}]});
        return Users_TypeUsers
    
    } catch (error) {
        console.log(`Error en el Join Usuarios_tipoUsuarios: ${error}`);
        throw new Error(error.message);
    }
}
module.exports = {BuscarUsers_TypeUsers}