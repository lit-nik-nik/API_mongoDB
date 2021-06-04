const mongoose = require("mongoose");

const Time = mongoose.model('Time');

const getAll = (req, res) => {
    Time.find()
        .exec()
        .then(settings => res.json(settings))
        .catch(err => res.status(500).json(err));
};

const create = (req, res) => {

    const newTime = {
        modify_time: req.body.time,
    }

    Time.create(newTime)
        .then(create => res.json(create))
        .catch(err => res.status(500).json(err));
};

const update = (req, res) => {
    Time.findOneAndUpdate({order_id: req.params.id}, req.body)
        .exec()
        .then(setting => res.json(setting))
        .catch(err => res.status(500).json(err));
};

module.exports = {
    getAll,
    create,
    update
}