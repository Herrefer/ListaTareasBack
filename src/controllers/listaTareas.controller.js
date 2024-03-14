import Tarea from "../database/model/tareas.js";

export const listarTareas = (req, res) => {
    console.log('la funcion listarTareas funciona');
    res.send('tu solicitud para listar tareas fué enviada correctamente')
};

export const agregarTarea = async(req, res) => {
    try{
        const tareaNueva = new Tarea (req.body);
        await tareaNueva.save();
        res.status(201).json({
            mensaje: "Se ha creado una nueva tarea"
        });
        console.log(req.body);
    }catch(error){
        console.log(error);
        res.status(400).json({
            mensaje: "no se pudo procesar la solicitud 'agregarTarea'"
        });
    };
};

export const borrarTarea = (req, res) => {
    console.log('la funcion borrarTarea funciona');
    res.send('tu solicitud para borrar tarea fué enviada correctamente')
};

export const editarTarea = (req, res) => {
    console.log('la funcion editarTarea funciona');
    res.send('tu solicitud para editar tarea fué enviada correctamente')
};