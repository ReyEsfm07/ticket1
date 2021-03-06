const RolRecursos = require('../../database/dbRolRecusos');
const PorcentajeRecursos = require('../../database/dbPorcentajeRecursos');

let registrarRol = async(recurso,costoMensual) =>{
    try{
        let recursoRegistrado = await RolRecursos.findOne({where: {rol_recurso: `${recurso}`}});
        if(recursoRegistrado == null){
            let nuevoRecurso = await RolRecursos.create({
                rol_recurso: recurso,
                costo_mensual_recurso: costoMensual
            })
            return nuevoRecurso
        } else {
            return recursoRegistrado;
        }
    } catch (error) {
        console.log(`Error en el modelo al registrar el recurso: ${error}`);
        throw new Error(error.message);
    }
}

let asignarPorcentaje = async(idRecurso,porcentaje,periodo,idPresupuesto) =>{
    try {
        let nuevaAsignacion = await PorcentajeRecursos.create({
            id_rol_recurso: idRecurso,
            porcentaje_asignacion: porcentaje,
            id_periodo: periodo,
            id_version_presupuesto: idPresupuesto
        });
        return nuevaAsignacion;
    } catch (error) {
        console.log(`Error en el modelo al asignar el porcentaje al recurso: ${error}`);
        throw new Error(error.message);
    }
}

module.exports = {registrarRol, asignarPorcentaje};