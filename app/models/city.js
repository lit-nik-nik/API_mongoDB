const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    order_id: Number,
    order_name: String,
    delivery_city: String,
}, {
    versionKey: false
});

mongoose.model("City", citySchema);