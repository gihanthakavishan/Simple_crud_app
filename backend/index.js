import express from "express"

//create express application

const app = express ()

app.listen(8800, ()=>{
    console.log("connected to backend ! 123")
})