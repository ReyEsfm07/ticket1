// Importar los mudulos necesarios a utilizar
const Proyectos = require('../../database/dbProyectos');
const VersionPresupuestos = require('../../database/dbVersPresupuestos');
const periodosPresupuestos = require('../../database/dbPeriodos');
const ingresosPresupuestos = require('../../database/dbIngresos');
const costosDirPresupuestos = require('../../database/dbCostosDirectos');
const costosAdmPresupuestos = require('../../database/dbCostosAdmin');
const porcentajeRecursosPresupuestos = require('../../database/dbPorcentajeRecursos');

// Definir los modulos
let registrarProyecto = async(nombreProyecto) =>{
    try {
        let proyectoRegistrado = await Proyectos.findOne({where: {proyecto_nombre: `${nombreProyecto}`}});
        if(proyectoRegistrado == null){
            let nuevoProyecto = await Proyectos.create({
                proyecto_nombre: nombreProyecto
            });
            return nuevoProyecto;
        } else {
            throw new Error('Proyecto ya registrado')
        }
    } catch (error) {
        console.log(`Error en el modelo al registrar el Proyecto: ${error}`);
        throw new Error(error.message);
    }
}

let registrarVersion = async(proyecto,version,usuarioEditor) =>{
    try{
        let versionPresupuestoRegistrado = await VersionPresupuestos.findOne({where: {id_proyecto: `${proyecto}`,version: `${proyecto.version}`}});
        if (versionPresupuestoRegistrado == null){
            let nuevaVersion = await VersionPresupuestos.create({
                version: version,
                id_proyecto: proyecto,
                id_usuario: usuarioEditor
            });
            return nuevaVersion;
        }
    } catch(error){
        console.log(`Error en el modelo al registrar la version del presupuesto: ${error}`);
        throw new Error(error.message);
    }
}


let eliminarPresupuesto = async(idPresupuesto) =>{
    try{
        let presupuestoRegistrado = await VersionPresupuestos.findOne({where: {id_version_presupuesto:`${idPresupuesto}`}})
        if(presupuestoRegistrado != null){
            let proyecto = presupuestoRegistrado.id_proyecto;
            await porcentajeRecursosPresupuestos.destroy({where: {id_periodo: `${proyecto}`}});
            await costosAdmPresupuestos.destroy({where: {id_periodo: `${proyecto}`}});
            await costosDirPresupuestos.destroy({where: {id_periodo: `${proyecto}`}});
            await ingresosPresupuestos.destroy({where: {id_periodo: `${proyecto}`}});
            await periodosPresupuestos.destroy({where: {id_version_presupuesto: `${proyecto}`}});
            await VersionPresupuestos.destroy({where: {id_proyecto: `${proyecto}`}});
        } else {
            throw new Error('El presupuesto no se encuentra  en la base de datos');
        }
    } catch(error) {
        console.log(`Error en el modelo al eliminar el presupuesto ${error}`);
        throw new Error(error.message);
    }
}

// Exportar los modulos
module.exports = {registrarProyecto, registrarVersion,eliminarPresupuesto}