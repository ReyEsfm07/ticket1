const ConceptoIngresos = require('../../database/dbConcepIngresos');
const Ingresos = require('../../database/dbIngresos');

let registrarConceptos = async (concepto)=>{
    try {
        let conceptoRegistrado = await ConceptoIngresos.findOne({where: {concepto_ingresos: `${concepto}`}});
        if(conceptoRegistrado == null){
            let nuevoConcepto = await ConceptoIngresos.create({
                concepto_ingresos: concepto
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

let registrarIngresos = async(concepto,cantidad,periodo,idPresupuesto)=>{
    try {
        let nuevoIngreso = await Ingresos.create({
            id_concepto_ingresos: concepto,
            ingresos_cantidad: cantidad,
            id_periodo: periodo,
            id_version_presupuesto: idPresupuesto
        });
        return nuevoIngreso;
    } catch (error) {
        console.log(`Error en el modelo al registrar los ingresos: ${error}`);
        throw new Error(error.message);
    }
}

module.exports = {registrarConceptos,registrarIngresos};