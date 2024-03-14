import mongoose, {Schema} from "mongoose";

const tareaSchema = new Schema({
    nombreTarea:{
        type: String,
        required: true,
        unique: false,
        minLength: 3,
        maxLength: 80
    }
})

const Tarea = mongoose.model('tarea', tareaSchema);

export default Tarea;