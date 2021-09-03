// Importar los mudulos necesarios a utilizar
const rateLimit = require('express-rate-limit');
const controladorUsuarios = require('../app/controlador/ControllerUsers');
const {modeloIniciarSesion, modeloRegistro} = require('./DTO/midd.modeloUsuarios');
const Joi = require('joi');

// Middleware para limitar el número de peticiones por usuario
const limiteConsultas = rateLimit({ 
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Excedio el número de peticiones al servidor'
})

// Middleware para validaciones de acceso
let validarUsuario = async(request, response, next) => {
    try {
        if (request.headers.authorization != undefined){
            const token = request.headers.authorization.split(' ')[1];
            let verificacion = await controladorUsuarios.verificarToken(token);
            request.params.usuario = verificacion.usuario;
            return next();
        } else {
            throw new Error ('Se requiere autorización para acceder a este sistema');
        }
    } catch(error) {
        console.log(error.message);
        response.status(400).json({message: `Acceso denegado: ${error.message}`});
    }
}


let validarAccesoUsuario = async(request, response, next) => {
    let infoUsuario = request.params.usuario;
    let administrador = 1;
    let usuarioComun = 2;
    try {
        if (infoUsuario.tipoUsuario == usuarioComun || infoUsuario.tipoUsuario == administrador){
            return next();
        } else {
            throw new Error ('No tiene permisos de Administrador');
        }
    } catch (error) {
        console.log(error.message);
        response.status(400).json({message: `Acceso denegado: ${error.message}`});
    }
}


let validarAdministrador = async(request, response, next) => {
    let infoUsuario = req.params.usuario;
    let administrador = 1;
    try {
        if (infoUsuario.tipoUsuario == administrador){
            return next();
        } else {
            throw new Error ('No tiene permisos de Administrador');
        }
    } catch (error) {
        console.log(error.message);
        response.status(400).json({message: `Acceso denegado: ${error.message}`});
    }
}



// Middleware para validar los datos ingresados para inciar sesión o registrar un usuario
let datosIniciarSesion = async (request, response, next) =>{
    try {
        await Joi.attempt(request.body, modeloIniciarSesion);
        return next();
    } catch (error) {
        response.status(400).json({message: 'Acceso denegado: Alguno de los campos cumple con los estandares'});
    }
}

let datosRegistro = async(request, response, next) =>{
    try {
        await Joi.attempt(request.body, modeloRegistro)
        next()
    } catch (error) {
        response.status(400).json({message: 'Acceso denegado: Alguno de los campos cumple con los estandares'});
    }
}

// Exportar los modulos
module.exports = {limiteConsultas, validarUsuario, validarAdministrador, validarAccesoUsuario, datosIniciarSesion, datosRegistro}