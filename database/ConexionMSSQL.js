const {Sequelize,DataTypes,Model} = require('sequelize');

const sequelize = new Sequelize('proyectoTECLA',null,null,{
    dialect:'mssql',//process.env.DIALECT,//MYSQL,SQL SERVER ,PG SQL,MONGOODB
    server:'localhost',//process.env.HOST,
    port:1433,//process.env.PORT_MSSQL,
    dialectOptions:{
        authentication:{
            type:'default',
            options:{
                encrypt:true,
                userName:'sa',//process.env.USERNAME_MSSQL,
                password:'12q3wa4esz'//process.env.PASSWORD
            }
        }
    }

});


//ESTE ES CODIGO DE PRUEBA PERO REALMENTE SE INICIA SEQUELIZE EN INDEX.JS
// const testConnection= async ()=>{
//     try{
//         await sequelize.authenticate();
//         console.log("SUCCESSFUL CONNECTION");
//     }catch(error){
//         console.log("FAILED CONNECTION", error);
//     }
// }
// testConnection()

module.exports = sequelize;