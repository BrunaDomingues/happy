import express from 'express';
import './database/connection';
import routes from './routes';
const app = express();
app.use(express.json());
app.use(routes);
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