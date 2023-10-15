// with the help of express we create rest api 
// morgan tell us the route end point and time of execution of query
const express = require("express");
const color =require ("colors")
const morgan = require ("morgan")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require('cors')

//dotenv config
dotenv.config()

// mongodb connection
connectDB()
// rest object 
const app = express()

// middlewares
app.use(express.json())
app.use(cors());
app.use(morgan('dev'))


// routes

app.use("/api/v1/user",require("./routes/userRoutes"))

// port
const port = process.env.PORT || 8080
//listen port 
app.listen(port,()=>{
    console.log(`Serve running in ${process.env.DEV_MODE} Mode on port ${port}`.bgCyan.white)
})