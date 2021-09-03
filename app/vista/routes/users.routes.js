const router=require('express').Router();
// Importar los mudulos necesarios a utilizar
const controladorUsuarios = require('../../controlador/ControllerUsers');
const middUsuarios = require('../../../middlewares/midd.usuarios');
const ExtractDataUsers= require('../../controlador/EDConntrollerUsers-type')

//usamos ExpressRouters para gestionar las rutas 
const express=require("express")
// const bodyparser=require('body-parser')






// Registro de usuarios
//Eleminar id usuario
// {
//"id_usuario":1
// }
router.delete('/perfil', async(request, response)=>{
    let usuario = request.body.Idusuario;
    try {
        let eleminarUsuario = await controladorUsuarios.eliminarusuario(usuario);
        response.status(200).json({message: 'se elimino el usuario'})
    } catch (error) {
        console.log(error.message);
        response.status(500).json({message: error.message});
    }
})



//creamos las rutas 
router.get("/",(request,response)=>{
    // response.send("WELCOME")
    response.json({
        estado:true,
        mensaje:"funcional"
    })
});





//Ruta Tabla
router.get("/tablas",async(request,response)=>{
    try {

        response.status(200).render("fechas")
    }catch (err) {
        console.log(err.message)
        response.status(500).json({message:"Error en el servidor",error:err.message})
    }
});

router.get("/calendario",async(request,response)=>{
    try {

        response.status(200).render("calendario",{Titulo_tabla:"CALENDARIO"})
    }catch (err) {
        console.log(err.message)
        response.status(500).json({message:"Error en el servidor",error:err.message})
    }
});


module.exports=router


