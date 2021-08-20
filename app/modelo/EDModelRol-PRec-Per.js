const RolRecursos=require("../../database/dbRolRecusos")
const PorcentajeRecursos=require("../../database/dbPorcentajeRecursos")
const PeriodosRecursos=require("../../database/dbPeriodos")




let listaRecursos=async()=>{
    let Recursos=await PorcentajeRecursos.findAll({
        attributes:['id_rol_recurso',['porcentaje_asignacion','Porcentaje_Asignado']],//
        include:[
            {model:RolRecursos,
            attributes:[['rol_recurso','Recurso'],['costo_mensual_recurso','CostoRecurso']],
            required:true
        },
        {model:PeriodosRecursos,
            attributes:[['periodo','Mes_fecha']],
            required:true
        } 
        ]
        // where:{id_version_presupuesto:}
    
    });
    return Recursos
            
};
// let listaRecursos=async()=>{
//     let Recursos=await RolRecursos.findAll({
//         attributes:['id_rol_recurso',['rol_recurso','Recurso']],//,['costo_mensual_recurso','CostoRecurso']
//         include:[
//             {model:PorcentajeRecursos,
//             attributes:[['porcentaje_asignacion','Porcentaje_Asignado']],
//             required:true
//         },
//         {model:PeriodosRecursos,
//             attributes:[['periodo','Mes_fecha']],
//             required:true
//         }
//         ]
//         // where:{id_version_presupuesto:}
    
//     });
//     return Recursos
            
// };

module.exports={listaRecursos}