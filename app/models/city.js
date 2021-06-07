const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    client_id: Number,
    order_id: Number,
    order_name: String,
    delivery_city: String,
}, {
    versionKey: false
});

mongoose.model("City", citySchema);