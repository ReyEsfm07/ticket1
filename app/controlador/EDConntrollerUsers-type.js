let EDMUsers=require("../modelo/EDModelUsers-type")

let ObtenerDatosUsers_typeUsers = async() => {
    try {
        let ObtenerDatos = await EDMUsers.BuscarUsers_TypeUsers()
        return ObtenerDatos
    } catch (error) {
        console.log(`Error en el Join Usuarios_tipoUsuarios: ${error}`);
        throw new Error(error.message);
    }
}

module.exports={ObtenerDatosUsers_typeUsers}