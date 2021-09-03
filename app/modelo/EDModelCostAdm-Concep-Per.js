const costosAdministrativos = require("../../database/dbCostosAdmin")
const ConcepCostosAdministrativos = require("../../database/dbConcepCostosAdmin")
const PeriodosCostosAdministrativos = require("../../database/dbPeriodos")


let listaCostosAdministrativos = async() => {
    let CostAdm=await costosAdministrativos.findAll({
        attributes:['id_costos_administrativos',['costos_administrativos_cantidad','Cantidad']],
        include:[
            {model:ConcepCostosAdministrativos,
            attributes:[['concepto_costo_administrativo','Concepto']],
            required:true
        },
        {model:PeriodosCostosAdministrativos,
            attributes:[['periodo','Mes_fecha']],
            required:true
        }
        ]
    
    });
    return CostAdm
            
};

module.exports = {listaCostosAdministrativos}