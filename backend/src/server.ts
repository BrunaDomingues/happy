import express from 'express';
const app = express();
app.use(express.json());
// Rota = Conjunto
// Recurso = usuário
// Métodos http = GET, POST, PUT, DELETE
// Parametros
// GET - Buscar uma info
// POST - Criando uma info
// PUT - Editar uma info
// DELETE - Delete uma info
// /users/:id : => parametro
app.post("/users/:id", (request, response) => {
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
    return response.json({message: "Hello World"});
});
app.listen(3333);