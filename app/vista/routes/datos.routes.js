const controladorPresupuestos = require('../../controlador/ControllerPresupuestos');
const middUsuarios = require('../../../middlewares/midd.usuarios');
const ExtractDataPresupuesto= require('../../controlador/EDControllerPresupuestos')



const express=require("express")
const router=express.Router();
// const bodyparser=require('body-parser')

router.use(express.json());
// capturamos el body
// router.use(bodyparser.urlencoded({extended:false}));
// router.use(bodyparser.json());




//REGISTRAR UN NUEVO PROYECTO
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





// Eliminar un presupuesto por identificador
// app.delete('/datos_presupuesto_Recursos/delete/:idPresupuesto', async(request,response)=>{
router.delete('/datos_presupuesto/delete', async(request,response)=>{
    // let idPresupuesto = request.params.idPresupuesto;
    let idPresupuesto = request.body.idPresupuesto;
    try{
        await controladorPresupuestos.eliminarPresupuesto(idPresupuesto);
        response.status(200).json({message: 'Se ha borrado con Exito el presupuesto'})
    } catch(error) {
        console.log(error.message);
        response.status(500).json({message: error.message});
    }
});


//ACA ES DONDE SE MANDAN TODA LA INFORMACIÓN A LA PAGINA PRINCIPAL DONDE SE ENCUENTRAN LAS TABLAS

//EXPERIMENTOS
router.get('/dataTables',async(request, response)=>{
    try {
        let ConcatIngresos=await ExtractDataPresupuesto.ObtenerDatosIngresos()
        let ConcatcostosAdministrativos=await ExtractDataPresupuesto.ObtenerDatosCostosAdministrativos()
        let ConcatCostosDir=await ExtractDataPresupuesto.ObtenerDatosCostosDirectos()
        let ConcatRecursos=await ExtractDataPresupuesto.ObtenerDatosRecursos()
        let obj_unido1=(ConcatIngresos).concat(ConcatcostosAdministrativos)
        let obj_unido2=obj_unido1.concat(ConcatCostosDir)
        let obj_unido3=obj_unido2.concat(ConcatRecursos)
        response.send(obj_unido3)
    } catch (error) {
        console.log(error.message);
        response.status(500).json({message: error.message});
    }
})
 



module.exports=router

