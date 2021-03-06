const ConceptoCostosDirectos = require('../../database/dbConcepCostosDirectos');
const CostosDirectos = require('../../database/dbCostosDirectos');

let registarConceptosCD = async(conceptoCD) =>{
    try {
        let conceptoRegistrado = await ConceptoCostosDirectos.findOne({where: {concepto_costos_directos: `${conceptoCD}`}});
        if(conceptoRegistrado == null){
            let nuevoConcepto = await ConceptoCostosDirectos.create({
                concepto_costos_directos: conceptoCD
            })
            return nuevoConcepto;
        } else {
            return conceptoRegistrado;
        }
    } catch (error) {
        console.log(`Error en el modelo al registrar el concepto: ${error}`);
        throw new Error(error.message);
    }
}

let registrarCostosDirectos = async(conceptoCD,cantidad,periodo,idPresupuesto) =>{
    try{
        let nuevoCostoDirecto = await CostosDirectos.create({
            id_concepto_costos_directos: conceptoCD,
            costos_directos_cantidad: cantidad,
            id_periodo: periodo,
            id_version_presupuesto: idPresupuesto
        });
        return nuevoCostoDirecto;
    } catch (error){
        console.log(`Error en el modelo al registrar los costos directos: ${error}`);
        throw new Error(error.message);
    }
}

module.exports = {registarConceptosCD,registrarCostosDirectos}