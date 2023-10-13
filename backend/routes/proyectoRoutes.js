import express from 'express';
import {
    obtenerProyecto, 
    nuevoProyecto, 
    obtenerProyectos, 
    editarProyecto, 
    eliminarColaborador, 
    eliminarProyecto,
    agregarColaborador, 
    obtenerTareas
} from '../controllers/proyectoController';
import checkAuth from '../middleware/checkAuth';

const router = express.Router();

router.get('/')

export default router;