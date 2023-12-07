import Proyecto from '../models/Proyecto.js'
import Tarea from '../models/Tarea.js';

const obtenerProyectos = async(req, res) => {
    const proyectos = await Proyecto.find().where('creador').equals(req.usuario);

    res.json(proyectos)
}

const nuevoProyecto = async(req, res) => {
    const proyecto = new Proyecto(req.body);
    proyecto.creador = req.usuario._id;

    try {
        const proyectoAlmacenado = await proyecto.save()
        res.json(proyectoAlmacenado);
    } catch (error) {
        console.log(error)
    }
}

const obtenerProyecto = async(req, res) => {
    const { id } = req.params

    try {
        const proyecto = await Proyecto.findById(id)
        
        if(!proyecto) {
            const error = new Error('No Encontrado');
            return res.status(404).json({msg: error.message})
        }

        if(proyecto.creador.toString() !== req.usuario._id.toString()) {
            const error = new Error('Accion No Valida');
            return res.status(404).json({msg: error.message})
        } 

        // Obtener Tareas del Proyecto
        const tareas = await Tarea.find().where('proyecto').equals(proyecto._id);
            
        res.json({
            proyecto, 
            tareas
        })
    } catch (err) {
        const error = new Error(err);
        return res.status(404).json({msg: error.message})
    }
}

const editarProyecto = async(req, res) => {
    const { id } = req.params

    try {
        const proyecto = await Proyecto.findById(id)
        
        if(!proyecto) {
            const error = new Error('No Encontrado');
            return res.status(404).json({msg: error.message})
        }

        if(proyecto.creador.toString() !== req.usuario._id.toString()) {
            const error = new Error('Accion No Valida');
            return res.status(404).json({msg: error.message})
        } 
            
        proyecto.nombre = req.body.nombre || proyecto.nombre;
        proyecto.cliente = req.body.cliente || proyecto.cliente;
        proyecto.descripcion = req.body.descripcion || proyecto.descripcion;
        proyecto.fechaEntrega = req.body.fechaEntrega || proyecto.fechaEntrega;

        try {
            const proyectoAlmacenado = await proyecto.save()
            res.json(proyectoAlmacenado)
        } catch (error) {
            console.log(error)
        }
    } catch (err) {
        const error = new Error('No encontrado');
        return res.status(404).json({msg: error.message})
    }
}

const eliminarProyecto = async(req, res) => {
    const { id } = req.params

    try {
        const proyecto = await Proyecto.findById(id)
        
        if(!proyecto) {
            const error = new Error('No Encontrado');
            return res.status(404).json({msg: error.message})
        }

        if(proyecto.creador.toString() !== req.usuario._id.toString()) {
            const error = new Error('Accion No Valida');
            return res.status(404).json({msg: error.message})
        } 

        try {
            await proyecto.deleteOne();
            res.json({msg: "Proyecto Eliminado"})
        } catch (error) {
            console.log(error)
        }
    } catch (err) {
        const error = new Error('No encontrado');
        return res.status(404).json({msg: error.message})
    }
}

const agregarColaborador = async(req, res) => {
    
}

const eliminarColaborador = async(req, res) => {
    
}

export {
    obtenerProyecto, 
    nuevoProyecto, 
    obtenerProyectos, 
    editarProyecto, 
    eliminarColaborador, 
    eliminarProyecto,
    agregarColaborador
}

