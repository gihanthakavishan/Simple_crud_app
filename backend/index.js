import express from "express"
import mysql from "mysql"


//create express application

const app = express ()
//connect db
const db = mysql.createConnection({

    host: "localhost",
    user:"root",
    password:"kavi123",
    database:"practice"

})

//reach backend server
app.get("/", (req,res)=>{
    res.json("hello this is backend")
})

app.listen(8800, ()=>{
    console.log("connected to backend ! 123")
})