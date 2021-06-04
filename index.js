const mongoose = require("mongoose");
const express = require("express");
require('./app/models');

const config = require('./config');
const {mongoUri, appPort} = config.app;
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

config.express(app);
config.routesSettings(app);
config.routesCity(app);
config.routesTime(app);

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => app.listen(
        appPort,
        () => console.log(`Сервер запущен на порту ${appPort}`)
    ))
    .catch(err => console.error(`Ошибка подключения к базе данных: ${mongoUri}`, err))
