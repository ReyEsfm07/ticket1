// Importar los mudulos necesarios a utilizar
const Usuarios = require('../../database/dbUsers');
const bcrypt = require('bcrypt');

// Definir los modulos
let nuevoRegistro = async(usuario) =>{
    try {
        let existeUsuario = await Usuarios.findOne({where: {correo: `${usuario.correo}`}});
        if (existeUsuario == null){
            let nuevoUsuario = await Usuarios.create({
                nombres: usuario.nombres,
                apellidos: usuario.apellidos,
                correo: usuario.correo, 
                password: usuario.password,
                activo: usuario.activo,
                id_tipo_usuario: usuario.id_tipo_usuario
            });
            return nuevoUsuario;
        } else {
            throw new Error('Usuario ya registrado, por favor inicie sesión');
        }
    } catch (error) {
        console.log(`Error en el modelo al registrar al usuario: ${error}`);
        throw new Error(error.message);
    }
}

let buscarUsuario = async(usuario) =>{
    try {
        let infoUsuario = await Usuarios.findOne({where: {correo: `${usuario.correo}`}});
        if(infoUsuario != null){
            let validacionPass = await bcrypt.compare(usuario.password,infoUsuario.password);
            if(validacionPass){
                return infoUsuario;
            } else {
                console.log('La contraseña es incorrecta');
                throw new Error('La contraseña es incorrecta');
            }
        } else {
            console.log('Usuario no registrado');
            throw new Error('El usuario no esta registrado, revise su correo');
        }
    } catch (error) {
        console.log(`Error en el modelo al buscar usuario: ${error}`)
        throw new Error(error.message);
    }
}



let listarUsuarios = async() => {
    try {
        let usuarios = await Usuarios.findAll();
        return usuarios;
    } catch (error) {
        console.log(`Error en el modelo al consultar la lista de usuarios: ${error}`)
        throw new Error(error.message);
    }
}




let eliminarUsuario = async(idUsuario) =>{
    try{
        let usuarioRegistrado = await Usuarios.findOne({where: {id_usuario:`${idUsuario}`}})
        if(usuarioRegistrado != null){
            let proyecto = usuarioRegistrado.id_usuario;

            await Usuarios.destroy({where: {id_usuario: `${proyecto}`}});
        } else {
            throw new Error('El usuario no se encuentra  en la base de datos');
        }
    } catch(error) {
        console.log(`Error en el modelo al eliminar el usuario ${error}`);
        throw new Error(error.message);
    }
}

module.exports = {nuevoRegistro, buscarUsuario, listarUsuarios,eliminarUsuario}



