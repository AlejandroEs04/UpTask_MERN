import express from 'express';

import {
    agregarTarea, 
    obtenerTrarea, 
    actualizarTarea, 
    eliminarTraea, 
    cambiarEstado
} from '../controllers/tareaController.js';
import checkAuth from '../middleware/checkAuth.js';
const router = express.Router();

router.post('/', checkAuth, agregarTarea)

router
    .route('/:id')
    .get(checkAuth, obtenerTrarea)
    .put(checkAuth, actualizarTarea)
    .delete(checkAuth, eliminarTraea)

router.post('/estado/:id', checkAuth, cambiarEstado)

export default router