import express from 'express';
import 'dotenv/config';

console.log('Todo va correcto. Nodemon funciona extraño pero se ejecuta (y)');

const app = express();
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), () =>{
    console.log('Funciona correctamente el puerto adjudicado ' + app.get('port'))
});

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));