const Juego = require("../models/juegoModel");

const obtenerjugadores = async(req,res)=>{
    try{
        const player = await Juego.find();
        res.json(player)
    }catch (e){
        res.json({Mensaje: "¡Error al obtener datos!"})
    }
}
const crearjuego = async(req,res)=>{
    try{
        const {nombre, jugadores} = req.body;
        const nuevo = new Juego ({nombre, jugadores});
        await nuevo.save();
        res.json({Mensaje: nuevo})
    }catch (e){
        res.json({Error: e})
    }
}
const sumarPuntajes = async(req,res)=>{
    try{
        const {nombreJuego} = req.params
        const listaPuntajes = await Juego.find(nombreJuego)
        console.log(listaPuntajes)
        let lista = [1, 2]
        const suma = lista.reduce((puntajes, total)=>{
            console.log(puntajes)
        return puntajes + total, 0;
        
    })
        res.json({ resultado: suma})
    }catch(e){
        return res.json({Mensaje: "¡Operación fallida!"})
    }
    
}

const eliminarjugador = async(req,res)=>{
    const {id} = req.params;
    let jugadorEliminado = await Juego.findByIdAndDelete(id)
    if(!jugadorEliminado){
        return res.json({Mensaje: "Jugador no encontrado en Game"})
    }else{
        res.json({Mensaje: "Jugador eliminado exitosamente", jugadorEliminado})
    }
}
module.exports = {obtenerjugadores, crearjuego, eliminarjugador, sumarPuntajes}


// const ingresarjugador = async(req,res)=>{
//     try{
//         const {alias, puntaje} = req.body;
//         const nuevo = new Juego ({alias, puntaje});
//         await nuevo.save();
//         res.json({Mensaje: nuevo})
//     }catch (e){
//         res.status(500).json({Mensaje:"¡Error al ingresar nuevo jugador!"})
//     }
// }
// const actualizarjugador = async(req,res)=>{
//     try{
//         let {id} = req.params;
//         let {alias, puntaje} = req.body
//         if (!alias || !puntaje){
//             return res.json({Mensaje: "¡Es necesario llenar todos los campos!"})
//         }else{
//             let actualizacion = await Juego.findByIdAndUpdate(id, {alias,puntaje})
//             return res.json({Mensaje: "Datos del jugador actualizados exitosamente", actualizacion})
//         }
//     }catch(e){
//         res.json({Mensaje: "¡Error al actualizar datos del jugador!"})
//     }
// }