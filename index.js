import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import path from 'path';


console.log('Funciona todo correctamente (y)');

const app = express();
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), () =>{
    console.log('Funciona correctamente el puerto adjudicado ' + app.get('port'))
});

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname= path.dirname(__filename);
console.log(__dirname);
app.use(express.static(path.join(__dirname,'/public')));

