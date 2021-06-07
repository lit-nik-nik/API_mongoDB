const {getAllClient, getOne, getAll, create, update, remove} = require('../app/controllers/city');

module.exports = (app) => {
    app.get("/api/city", getAll);
    app.get("/api/city-client/:id", getAllClient);
    app.get("/api/city/:id", getOne);
    app.post("/api/city", create);
    app.put("/api/city/:id", update);
    app.delete("/api/city/:id", remove);
};