//esquema para coleccion

let mongoose = require('mongoose');
const { type } = require('os');

const jugadorSchema = new mongoose.Schema({
    alias: {
        type:String,
        required:true
    },
    puntaje:{
        type:Number,
        required:false
    }
});

const JuegoSchema = new mongoose.Schema({
    nombre: {
        type:String,
        required:true
    },
    jugadores:{
        type:[jugadorSchema],
        validate:[arrayLimit,"Es necesario al menos un jugador"]//Para asegurarse que al menos haya un jugador
    }
})
function arrayLimit(num){
    return num.length>0;   //determinar tamaño -> length: minimo 1
}

const juego = mongoose.model('juego', JuegoSchema)
module.exports= juego;