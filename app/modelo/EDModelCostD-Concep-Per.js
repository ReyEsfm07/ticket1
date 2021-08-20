const costosDirectos=require("../../database/dbCostosDirectos")
const ConcepCostosDirectos=require("../../database/dbConcepCostosDirectos")
const PeriodosCostosDirectos=require("../../database/dbPeriodos")





let listaCostosDirectos=async()=>{
    let CostDir=await costosDirectos.findAll({
        attributes:['id_costos_directos',['costos_directos_cantidad','Cantidad']],
        include:[
            {model:ConcepCostosDirectos,
            attributes:[['concepto_costos_directos','Concepto']],
            required:true
        },
        {model:PeriodosCostosDirectos,
            attributes:[['periodo','Mes_fecha']],
            required:true
        }
        ]
        // where:{id_version_presupuesto:}
    
    });
    return CostDir
            
};

module.exports={listaCostosDirectos}