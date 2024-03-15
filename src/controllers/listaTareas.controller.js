import Tarea from "../database/model/tareas.js";

export const listarTareas = async (req, res) => {
  try {
    const listaDeTareas = await Tarea.find();
    console.log(listaDeTareas);
    res.status(200).json(listaDeTareas);
  } catch (error) {
    res.status(400).json({
      mensaje: "no se pudo procesar la solicitud 'listarTareas'",
    });
  }
};

export const agregarTarea = async (req, res) => {
  try {
    const tareaNueva = new Tarea(req.body);
    await tareaNueva.save();
    res.status(201).json({
      mensaje: "Se ha creado una nueva tarea",
    });
    console.log(req.body);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "no se pudo procesar la solicitud 'agregarTarea'",
    });
  }
};
export const buscarTarea = async (req, res) => {
  try {
    const tareaEncontrada = await Tarea.findById(req.params.id);
    console.log(tareaEncontrada);
    res.status(200).json(tareaEncontrada);
  } catch (error) {
    res.status(404).json({
      mensaje: "la tarea buscada no existe o no fué encontrada",
    });
  }
};

export const borrarTarea = async (req, res) => {
  try {
    const tareaEncontrada = await Tarea.findById(req.params.id);
    console.log(tareaEncontrada);
    if (tareaEncontrada) {
      console.log(tareaEncontrada + " es el objeto que vas a borrar");
      await Tarea.findByIdAndDelete(req.params.id);
      res.send("tarea " + tareaEncontrada.nombreTarea + " borrada");
    } else {
      res.status(404).json({
        mensaje: "la tarea que desea borrar no existe o no fué encontrada",
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "hubo un error al realizar la solicitud",
    });
  }
};

export const editarTarea = (req, res) => {
  console.log("la funcion editarTarea funciona");
  res.send("tu solicitud para editar tarea fué enviada correctamente");
};
