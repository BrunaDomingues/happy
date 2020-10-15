import express from 'express';
const app = express();
app.listen(3333);
app.get("/users", (request, response) => {
    return response.json({message: "Hello World"});
});