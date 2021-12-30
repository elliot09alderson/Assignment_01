const app = require("./app")
const dotenv = require("dotenv");
const connectDataBase = require("./config/database");

//Config File
dotenv.config({path:"config/config.env"});

//Connecting to DataBase
connectDataBase()

//listening to port
app.listen(process.env.PORT,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`);
})