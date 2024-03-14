import { Router } from "express";
import { agregarTarea, borrarTarea, buscarTarea, editarTarea, listarTareas } from "../controllers/listaTareas.controller.js";

const enrutador = Router();

enrutador.route('/').get(listarTareas).post(agregarTarea).delete(borrarTarea).patch(editarTarea);
enrutador.route('/:id').get(buscarTarea);

export default enrutador;