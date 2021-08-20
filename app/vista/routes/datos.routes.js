const controladorPresupuestos = require('../../controlador/ControllerPresupuestos');
const middUsuarios = require('../../../middlewares/midd.usuarios');
const ExtractDataPresupuesto= require('../../controlador/EDControllerPresupuestos')



const express=require("express")
const router=express.Router();
const bodyparser=require('body-parser')

router.use(express.json());
// capturamos el body
router.use(bodyparser.urlencoded({extended:false}));
router.use(bodyparser.json());

// Registro de datos
// app.post('/tdatos_presupuesto', async(request, response)=>{
//     let presupuesto = request.body;
//     let usuarioEditor = request.params.usuario;
//     try {
//         let nuevoProyecto = await controladorPresupuestos.registrarProyecto(presupuesto.nombreProyecto,presupuesto.version,usuarioEditor.id_usuario);
//         let registrarDatos = await controladorPresupuestos.registrarDatos(presupuesto.datos,nuevoProyecto.id_version_presupuesto);
//         response.status(200).json({message: 'Registro de presupuesto exitoso'});
//     } catch (error) {
//         console.log(error.message);
//         response.status(500).json({message: error.message});
//     }
// }); 

router.post('/datos_presupuesto',middUsuarios.validarUsuario, middUsuarios.validarAccesoUsuario, async(request, response)=>{
    let presupuesto = request.body;
    let usuarioEditor = request.params.usuario;
    try {
        let nuevoProyecto = await controladorPresupuestos.registrarProyecto(presupuesto.nombreProyecto,presupuesto.version,usuarioEditor.id_usuario);
        let registrarDatos = await controladorPresupuestos.registrarDatos(presupuesto.datos,nuevoProyecto.id_version_presupuesto);
        response.status(200).json({message: 'Registro de datos exitoso'});
    } catch (error) {
        console.log(error.message);
        response.status(500).json({message: error.message});
    }
});  



router.get('/datos_presupuesto_Ingresos',async(request, response)=>{
    let variableWhereId=''
    try {
        response.send(await ExtractDataPresupuesto.ObtenerDatosIngresos())
    } catch (error) {
        console.log(error.message);
        response.status(500).json({message: error.message});
    }
    
})



router.get('/datos_presupuesto_CostDir',async(request, response)=>{
    let variableWhereId=''
    try {
        response.send(await ExtractDataPresupuesto.ObtenerDatosCostosDirectos())
    } catch (error) {
        console.log(error.message);
        response.status(500).json({message: error.message});
    }
    
})
 

router.get('/datos_presupuesto_CostAdm',async(request, response)=>{
    let variableWhereId=''
    try {
        response.send(await ExtractDataPresupuesto.ObtenerDatosCostosAdministrativos())
    } catch (error) {
        console.log(error.message);
        response.status(500).json({message: error.message});
    }
    
})


router.get('/datos_presupuesto_Recursos',async(request, response)=>{
    let variableWhereId=''
    try {
        response.send(await ExtractDataPresupuesto.ObtenerDatosRecursos())
    } catch (error) {
        console.log(error.message);
        response.status(500).json({message: error.message});
    }
    
})







//ACA ES DONDE SE MANDAN TODA LA INFORMACIÓN A LA PAGINA PRINCIPAL DONDE SE ENCUENTRAN LAS TABLAS

//EXPERIMENTOS
router.get('/dataTables',async(request, response)=>{
    try {
        let a=await ExtractDataPresupuesto.ObtenerDatosIngresos()
        let b=await ExtractDataPresupuesto.ObtenerDatosCostosAdministrativos()
        let c=await ExtractDataPresupuesto.ObtenerDatosCostosDirectos()
        let d=await ExtractDataPresupuesto.ObtenerDatosRecursos()
        let obj_unido1=(a).concat(b)
        let obj_unido2=obj_unido1.concat(c)
        let obj_unido3=obj_unido2.concat(d)
        response.send(obj_unido3)
    } catch (error) {
        console.log(error.message);
        response.status(500).json({message: error.message});
    }
})
 

module.exports=router








// const UsersDB=require("../../../database/dbUsers")
// const TypeUsersDB=require("../../../database/dbTypeUsers")

// router.get('/datos_presupuesto', async(request, response)=>{


    // UsersDB.findAll({attributes:['id_tipo_usuario','nombres','apellidos'],
    //                 include:[{model:TypeUsersDB,attributes:['tipo_usuarios'],required:true}]

    //             }).then( postres3=>{
    //                 const resultados3=JSON.stringify(postres3)
    //                 // console.log(resultados3)
    //                 response.send(resultados3)
    //             })
    

// }); 






// const usersPrueba=require("./database/dbUsers")
// usersPrueba.findAll({attributes:['nombres','apellidos']})
//     .then(postres=>{
//         const resultados=JSON.stringify(postres)
//         // console.log(postres)
//         console.log(resultados)
//     })
//     .catch(error=>
//         console.log(error))



// const usersPrueba2=require("./database/dbTypeUsers")
// usersPrueba2.findAll({attributes:['id_tipo_usuario','tipo_usuarios']})
//     .then(postres2=>{
//         const resultados2=JSON.stringify(postres2)
//         // console.log(postres)
//         console.log(resultados2)
//     })
//     .catch(error=>
//         console.log(error))




// usersPrueba.findAll({attributes:['id_tipo_usuario','nombres','apellidos'],
//                 include:[{model:usersPrueba2,attributes:['tipo_usuarios'],required:true}]

//             }).then( postres3=>{
//                 const resultados3=JSON.stringify(postres3)
//                 console.log(resultados3)
//             })
    
    
