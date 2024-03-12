import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';


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