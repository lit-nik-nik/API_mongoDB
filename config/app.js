const appPort = 9005;

const {mongoLogin, mongoPass, mongoCollection, mongoDB} = require('./.mongoDB/settingsDB');

const mongoUri = `mongodb+srv://${mongoLogin}:${mongoPass}@${mongoCollection}.hsnpv.mongodb.net/${mongoDB}?retryWrites=true&w=majority`

module.exports = {
    appPort,
    mongoUri
}