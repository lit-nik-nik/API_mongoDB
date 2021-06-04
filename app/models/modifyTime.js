const mongoose = require("mongoose");

const timeSchema = new mongoose.Schema({
    time_id: Number,
    modify_time: String
}, {
    versionKey: false
});

mongoose.model("Time", timeSchema);