const axios = require('axios');
const fs = require('fs');
const {fileDB, uriDB} = require('../../config/.mongoDB/settingsDB');

let modifyTime = {};

fs.stat(fileDB, function(err,stat){
    modifyTime.time = new Date(stat.mtime).toLocaleString();

    axios.put(uriDB, modifyTime)
});



