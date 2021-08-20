const UsersDB=require("../../database/dbUsers")
const TypeUsersDB=require("../../database/dbTypeUsers")

// router.get('/datos_presupuesto', async(request, response)=>{


//     UsersDB.findAll({attributes:['id_tipo_usuario','nombres','apellidos'],
//                     include:[{model:TypeUsersDB,attributes:['tipo_usuarios'],required:true}]

//                 }).then( postres3=>{
//                     const resultados3=JSON.stringify(postres3)
//                     // console.log(resultados3)
//                     response.send(resultados3)
//                 })
    

// }); 

let BuscarUsers_TypeUsers=async()=>{
    try {

        
        let  Users_TypeUsers =await UsersDB.findAll({attributes:['id_tipo_usuario','nombres','apellidos'],
        include:[{model:TypeUsersDB,attributes:['tipo_usuarios'],required:true}]});
        return Users_TypeUsers
    
    } catch (error) {
        console.log(`Error en el Join Usuarios_tipoUsuarios: ${error}`);
        throw new Error(error.message);
    }
}
module.exports={BuscarUsers_TypeUsers}