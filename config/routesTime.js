const {getAll, create, update} = require('../app/controllers/modifyTime');

module.exports = (app) => {
    app.get("/api/time", getAll);
    app.post("/api/time", create);
    app.put("/api/time/:id", update);
};
