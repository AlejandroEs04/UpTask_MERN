import express from 'express';
const router = express.Router();

import { obtenerProyecto, nuevoProyecto, obtenerProyectos, editarProyecto, eliminarColaborador, eliminarProyecto, agregarColaborador } from '../controllers/proyectoController.js';
import checkAuth from '../middleware/checkAuth.js';

router
    .route('/')
    .get(checkAuth, obtenerProyectos)
    .post(checkAuth, nuevoProyecto);

router
    .route('/:id')
    .get(checkAuth, obtenerProyecto)
    .put(checkAuth, editarProyecto)
    .delete(checkAuth, eliminarProyecto);
    
router.post('/agregar-colaborador/:id', checkAuth, agregarColaborador);
router.post('/eliminar-colaborador/:id', checkAuth, eliminarColaborador);

export default router