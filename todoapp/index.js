const express = require("express")

const app = express();

//load config fom env
require("dotenv").config();

const PORT = process.env.PORT || 4000;

//MIDDLEWARE TO PARSE JSON REQUEST BODY

app.use(express.json())

//import routes for todo api

const todoRoutes = require("./routes/todo.js")

// mount the todo api routes 
app.use("/api/v1", todoRoutes)

//start server

app.listen(PORT,() => {
    console.log(`server started successfully at ${PORT}`);
    
})

//CONNECT TO DATABASE

const dbConnect = require("./config/database.js")
dbConnect();

//default Route 
app.get("/", (req,res) => {
    res.send(`<h1> This is HOMEPAGE baby </h1>`)
})