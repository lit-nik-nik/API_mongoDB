const {getOne, getAll, create, update} = require('../app/controllers/settings');

module.exports = (app) => {
    app.get("/api/settings", getAll);
    app.get("/api/settings/:id", getOne);
    app.post("/api/settings", create);
    app.put("/api/settings/:id", update);
};