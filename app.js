//tecnica mobile first --> mas lindo, mejor estructurado
//const PORT = 3000;

const express = require("express");
const path = require("path")
const app = express();

//dejo accesible la carpeta public
//uso public como si ya estaria en esa carpeta
app.use(express.static(path.join(__dirname, "public")));

//accedo con localhost:3000
app.listen(process.env.PORT || 3000, ()=>{console.log("Servidor corriendo en el puerto", PORT)});

//parametros: 1--> path, 2--> handler, funcion controladora
app.get("/", (req,res)=>{   
    res.sendFile(path.join(__dirname, "./views/home.html")) });

app.get("/register", (req,res)=>{   
    res.sendFile(path.join(__dirname, "./views/register.html")) });

app.get("/login", (req,res)=>{   
    res.sendFile(path.join(__dirname, "./views/login.html")) });