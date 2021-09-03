const Ingresoss = require("../../database/dbIngresos")
const ConcepIngresoss = require("../../database/dbConcepIngresos")
const Periodoss = require("../../database/dbPeriodos")


let listaIngresos = async() =>{
    let IngresosList = await Ingresoss.findAll({
        attributes:['id_ingresos',['ingresos_cantidad','Cantidad']],
        include:[
            {model:ConcepIngresoss,
            attributes:[['concepto_ingresos','Concepto']],
            required:true
        },
        {model:Periodoss,
            attributes:[['periodo','Mes_fecha']],
            required:true
        }
        ]
    
    });
    return IngresosList
            
};

module.exports = {listaIngresos}