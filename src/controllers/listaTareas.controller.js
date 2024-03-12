export const listarTareas = (req, res) => {
    console.log('la funcion listarTareas funciona');
    res.send('tu solicitud para listar tareas fué enviada correctamente')
};

export const agregarTarea = (req, res) => {
    console.log('la funcion agregarTarea funciona');
    res.send('tu solicitud para agregar tarea fué enviada correctamente')
};

export const borrarTarea = (req, res) => {
    console.log('la funcion borrarTarea funciona');
    res.send('tu solicitud para borrar tarea fué enviada correctamente')
};

export const editarTarea = (req, res) => {
    console.log('la funcion editarTarea funciona');
    res.send('tu solicitud para editar tarea fué enviada correctamente')
};