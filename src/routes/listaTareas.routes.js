import { Router } from "express";
import { agregarTarea, borrarTarea, buscarTarea, editarTarea, listarTareas } from "../controllers/listaTareas.controller.js";

const enrutador = Router();

enrutador.route('/').get(listarTareas).post(agregarTarea);
enrutador.route('/:id').get(buscarTarea).delete(borrarTarea).put(editarTarea);

export default enrutador;