const router=require('express').Router();
// Importar los mudulos necesarios a utilizar
const controladorUsuarios = require('../../controlador/ControllerUsers');
const middUsuarios = require('../../../middlewares/midd.usuarios');
const ExtractDataUsers= require('../../controlador/EDConntrollerUsers-type')



// Registro de usuarios
//Ejemplo de como ingresar los datos
// {
//     "nombres":"John",
//     "apellidos":"cruz",
//     "correo":"john@gmail.com",
//     "password":"batman1234"

// }
router.post('/register', middUsuarios.datosRegistro, async(request, response)=>{
    let usuario = request.body;
    try {
        let nuevoUsuario = await controladorUsuarios.nuevoRegistro(usuario);
        response.status(200).json({message: 'Registro de usuario exitoso'})
    } catch (error) {
        console.log(error.message);
        response.status(500).json({message: error.message});
    }
})



//Inicio de sesion
//Ejemplo de como ingresar los datos
// El token en el headers
// {

//     "correo":"eric@gmail.com",
//     "password":"batman123"

// }
router.post('/new_sesion', middUsuarios.datosIniciarSesion,async(request, response)=>{
    let usuario = request.body;
    try {
        let infoUsuario = await controladorUsuarios.buscarUsuario(usuario);

        if(infoUsuario != null){
            let token = await controladorUsuarios.generarToken(infoUsuario);
            response.status(200).json({message: 'El usuario es valido', token});
        }
    } catch (error) {
        console.log(error.message);
        response.status(500).json({message: error.message});
    }
})


router.get('/new_sesion',async(request, response)=>{
try {
    response.send(await ExtractDataUsers.ObtenerDatosUsers_typeUsers())

} catch (error) {
    console.log(error.message);
    response.status(500).json({message: error.message});
}
})

module.exports=router


// router.post('/register',async(require,response)=>{
//     const user=new User({
//         name:require.body.nombres,
//         apellido:require.body.apellidos,
//         email:require.body.correo,
//         password:require.body.password,
//         estado:require.body.estado,
//         tipo_usuario:equire.body.id_tipo_usuario

//     })
//     try {
//         const savedUserDB=await user.savedUser();
//         response.json({
//             error:null,
//             data:userDB
//         })
//     } catch (error) {
//         response.status(400).json(error)
        
//     }


// })




