let EDMIngresos=require("../modelo/EDModelIng-Cop-Per")
let EDMCostosDir=require("../modelo/EDModelCostD-Concep-Per")
let EDMCostosAdm=require("../modelo/EDModelCostAdm-Concep-Per")
let EDMRecursos=require("../modelo/EDModelRol-PRec-Per")


let ObtenerDatosIngresos=async()=>{
    try {
        let ObtenerDatos=await EDMIngresos.listaIngresos()
        return ObtenerDatos
    } catch (error) {
        console.log(`Error en el Join Ingresos: ${error}`);
        throw new Error(error.message);
    }
}

let ObtenerDatosCostosDirectos=async()=>{
    try {
        let ObtenerDatos=await EDMCostosDir.listaCostosDirectos()
        return ObtenerDatos
    } catch (error) {
        console.log(`Error en el Join Ingresos: ${error}`);
        throw new Error(error.message);
    }
} 

let ObtenerDatosCostosAdministrativos=async()=>{
    try {
        let ObtenerDatos=await EDMCostosAdm.listaCostosAdministrativos()
        return ObtenerDatos
    } catch (error) {
        console.log(`Error en el Join Ingresos: ${error}`);
        throw new Error(error.message);
    }
} 

let ObtenerDatosRecursos=async()=>{
    try {
        let ObtenerDatos=await EDMRecursos.listaRecursos()
        return ObtenerDatos
    } catch (error) {
        console.log(`Error en el Join Recursos: ${error}`);
        throw new Error(error.message);
    }
} 
module.exports={ObtenerDatosIngresos,ObtenerDatosCostosDirectos,ObtenerDatosCostosAdministrativos,ObtenerDatosRecursos}