const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema({
    client_id: Number,
    client_name: String,
    select_header: Array,
    number_orders: Number
}, {
    versionKey: false
});

mongoose.model("Settings", settingsSchema);