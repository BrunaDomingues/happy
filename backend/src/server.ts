import express from 'express';
import {getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';
import './database/connection';
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
app.listen(3333);