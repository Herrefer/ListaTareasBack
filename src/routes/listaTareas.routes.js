import { Router } from "express";
import { agregarTarea, borrarTarea, editarTarea, listarTareas } from "../controllers/listaTareas.controller.js";

const enrutador = Router();

enrutador.route('/').get(listarTareas).post(agregarTarea).delete(borrarTarea).patch(editarTarea);

export default enrutador;