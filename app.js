//IMPORTAR MODULOS
const express=require("express")
const app=express()
const bodyparser=require('body-parser')


const TypeUsers = require('./database/dbTypeUsers');
const Users = require('./database/dbUsers');
const Proyectos = require('./database/dbProyectos');
const VersPresupuestos = require('./database/dbVersPresupuestos');
const ConcepCostosAdmin = require('./database/dbConcepCostosAdmin');
const ConcepCostosDirectos = require('./database/dbConcepCostosDirectos');
const ConcepIngresos = require('./database/dbConcepIngresos');
const RolRecursos = require('./database/dbRolRecusos');
const Periodos = require('./database/dbPeriodos');
const Ingresos = require('./database/dbIngresos');
const CostosDir = require('./database/dbCostosDirectos');
const CostosAdmin = require('./database/dbCostosAdmin');
const PorcentajeRecursos = require('./database/dbPorcentajeRecursos');



const sequelize = require('./database/ConexionMSSQL');


//MIDDELEWARE
const cors = require("cors") 
const Dotenv = require("dotenv").config()
const morgan = require("morgan")


const middUsuarios = require('./middlewares/midd.usuarios');

app.use(express.json());
app.use(cors());
app.use(middUsuarios.limiteConsultas);

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



const testConnection = async() =>{
    try {


        await TypeUsers.sync();
        await Users.sync();
        await Proyectos.sync();
        await VersPresupuestos.sync();
        await ConcepCostosAdmin.sync();
        await ConcepCostosDirectos.sync();
        await ConcepIngresos.sync();
        await RolRecursos.sync();
        await Periodos.sync();
        await Ingresos.sync();
        await CostosDir.sync();
        await CostosAdmin.sync();
        await PorcentajeRecursos.sync();

        //AUTENTICAMOS LA CONEXION A LA BASE DE DATOS
        await sequelize.authenticate();
        console.log("SUCCESSFUL CONNECTION"); 
        //INICIAMOS NUESTRO SERVIDOR
        app.listen(process.env.PORT,() => {
            console.log(`SUCCESSFUL SERVER http://${process.env.HOST}:${process.env.PORT}`);
        })
        }catch(error){
        console.log("FAILED CONNECTION", error);
        }
}
testConnection();



//Exportamos las rutas
//Ruta de inicio
// app.use("/",require("./app/vista/routes/start.routes"));



//Ruta de Registro Usuario
// app.use("/",require("./app/Vista/routes/auth.routes"));
const authRoutes = require('./app/Vista/routes/auth.routes')
const data = require('./app/Vista/routes/datos.routes')
const users = require('./app/Vista/routes/users.routes')
//Router Middleware
app.use('/api/user',users);
app.use('/api/data',data) 
app.use('/api/auth',authRoutes) 




//Aparece con cada get que este mal o no este contemplado
app.use((request,response,next)=>{
    //.render("nombredeldocumento.ejs")------>ubicacion
    response.status(404).render("404Nofound",{404:"Error 404"})
    next();
});









