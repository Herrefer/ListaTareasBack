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
    if (tareaEncontrada) {
      res.status(200).json(tareaEncontrada);
    } else {
      res.status(404).json({
        mensaje: "la tarea buscada no existe o no fué encontrada",
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "hubo un error al realizar la solicitud",
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

export const editarTarea = async (req, res) => {
  try {
    const tareaEncontrada = await Tarea.findById(req.params.id);
    if (tareaEncontrada) {
      await Tarea.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        mensaje: "la tarea fué modificada con exito",
      });
    } else {
      res.status(404).json({
        mensaje: "La tarea que desea editar no existe o no fué encontrada",
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "hubo un error al realizar la solicitud",
    });
  }
};
