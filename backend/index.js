// import express from "express"
// import mysql from "mysql"


// //create express application

// const app = express ()
// //connect db
// //if there is an error
// // ALTER USER 'root'@'localhost' IDENTFIED WITH mysql_native_password By 'kavi123';
// const db = mysql.createConnection({

//     host: "localhost",
//     user:"root",
//     password:"kavi123",
//     database:"practice"

// })

// //reach backend server
// app.get("/", (req,res)=>{
//     res.json("hello this is backend")
// })
// //get all books
// app.get("/books", (req,res)=>{
//     const q ="SELECT * FROM practice.books"
//     db.query(q,(err,data)=>{
//         if(err) return res.json(err)
//         return res.json(data)

//     })
// })

// app.listen(8800, ()=>{
//     console.log("connected to backend ! 123")
// })
import express from "express";
import mysql from "mysql";

// create express application
const app = express();

// connect db
// if there is an error
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'kavi123';
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kavi123",
  database: "practice",
});

// handle database connection error
db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

// reach backend server
app.get("/", (req, res) => {
  res.json("hello this is backend");
});

// get all books
app.get("/books", (req, res) => {
  const q = "SELECT * FROM practice.books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// close the database connection when the application terminates
process.on("SIGINT", () => {
  db.end((err) => {
    console.log("Database connection closed.");
    process.exit(err ? 1 : 0);
  });
});

//add books
app.post("/books", (req,res)=>{
    const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)";
    const values = ["title fromm backend","desc from backend","cover pic from backend"];

    db.query(q, [values], (err,data) =>{
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8800, () => {
  console.log("Connected to backend! Port: 8800");
});
