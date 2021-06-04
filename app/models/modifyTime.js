const mongoose = require("mongoose");

const timeSchema = new mongoose.Schema({
    modify_time: String
}, {
    versionKey: false
});

mongoose.model("Time", timeSchema);