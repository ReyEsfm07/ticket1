//llamamos nuestra conexion a la base de datos
const sequelize=require("../database/ConexionMSSQL");

//Creamos servicios para la base de datos 
//Llamos la informacion de la tabla compra
const resumen_financiero = async()=>{
    try {
        let result=await sequelize.query('SELECT * FROM resumen_financiero;');
        // response.render("template/table",{asd:"result"})
        return result
    } catch (err) {
        console.log(err.message)
        throw new Error ("ocurrio un error en la consulta compra")
    }
}

//importamos los servicios
module.exports= {resumen_financiero}