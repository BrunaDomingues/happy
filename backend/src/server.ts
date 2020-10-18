import express from 'express';
import {getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';
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
<<<<<<< HEAD

=======
app.post("/orphanages", async (request, response) => {
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = request.body;
    const orphanageRepository = getRepository(Orphanage);
    const orphanage = orphanageRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    });
    await orphanageRepository.save(orphanage);

    //console.log(request.query);
    //console.log(request.params);
    //console.log(request.body);
    return response.status(201).json({orphanage});
});
>>>>>>> b33e80a988a81941a32f37b3f8add86d9d0d402d
app.listen(3333);