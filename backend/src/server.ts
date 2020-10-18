import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);
// Rota = Conjunto 
// Recurso = usuário
// Métodos http = GET, POST, PUT, DELETE
// Parametros
// GET - Buscar uma info
// POST - Criando uma info
// PUT - Editar uma info
// DELETE - Delete uma info
// /users/:id : => parametro
app.listen(3333);