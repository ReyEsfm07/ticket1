//exportamos los servicios 
const userServices=require("../../../services/start.service")
//usamos ExpressRouters para gestionar las rutas 
const express=require("express")
const router=express.Router();
const bodyparser=require('body-parser')



// capturamos el body
router.use(bodyparser.urlencoded({extended:false}));
router.use(bodyparser.json());


//creamos las rutas 
router.get("/",(request,response)=>{
    // response.send("WELCOME")
    response.json({
        estado:true,
        mensaje:"funcional"
    })
});

//Ruta INICIO
// router.get("/inicio",async(request,response)=>{
//     try {
//         let result= await userServices.compras()
//         response.status(200).json({message:"Datos recuperados exitosamente",result:result})
//     }catch (err) {
//         console.log(err.message)
//         response.status(500).json({message:"Error en el servidor",error:err.message})
//     }
// });


//Ruta PRESUPUESTO
router.get("/presupuesto",async(request,response)=>{
    try {
        let Datos= await userServices.resumen_financiero()
        response.status(200).render("inicio",{Titulo_tabla:"PRESUPUESTOS",Datos:Datos})
    }catch (err) {
        console.log(err.message)
        response.status(500).json({message:"Error en el servidor",error:err.message})
    }
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





//importamos las rutas 
module.exports=router