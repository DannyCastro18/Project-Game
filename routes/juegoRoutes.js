const express = require('express');
const router = express.Router();
const juegoController = require ('../controllers/juegoController.js')

router.get('/player', juegoController.obtenerjugadores)
router.post('/player', juegoController.crearjuego)
// router.put('/player/:id', juegoController.actualizarjugador)
router.delete('/player/:id', juegoController.eliminarjugador)
router.get('/player/:farcry', juegoController.sumarPuntajes)

module.exports=router;