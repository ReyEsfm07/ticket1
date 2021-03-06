const Periodos = require('../../database/dbPeriodos');

let registrarPeriodos = async(periodo, idPresupuesto) =>{
    try {
        let periodoRegistrado = await Periodos.findOne({where: {periodo: `${periodo}`,id_version_presupuesto: `${idPresupuesto}`}});
        if (periodoRegistrado == null){
            let nuevoPeriodo = await Periodos.create({
                periodo: periodo,
                id_version_presupuesto: idPresupuesto
            })
            return nuevoPeriodo;
        }
    } catch (error) {
        console.log(`Error en el modelo al registrar los periodos: ${error}`);
        throw new Error(error.message);
    }
}

module.exports = {registrarPeriodos};