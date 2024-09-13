const express = require('express');
const app = express();
const juegoRoutes = require('./routes/juegoRoutes')
require('dotenv').config(); //cargar las variables de entorno de mi archivo env
const PORT = process.env.puerto
const connexionDB = require("./config/db")
connexionDB()
app.use(express.json())

app.use("/api", juegoRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

