const mongoose = require("mongoose");

const Time = mongoose.model('Time');

const getTime = (req, res) => {
    const id = req.params.id;

    Time.findOne({time_id: id})
        .exec()
        .then(settings => res.json(settings))
        .catch(err => res.status(500).json(err));
};

const create = (req, res) => {

    const newTime = {
        time_id: 1,
        modify_time: req.body.time,
    }

    Time.create(newTime)
        .then(create => res.json(create))
        .catch(err => res.status(500).json(err));
};

const update = (req, res) => {

    console.log(req.body)

    const changeTime = {
        modify_time: req.body.time
    }

    Time.findOneAndUpdate({time_id: req.params.id}, changeTime)
        .exec()
        .then(setting => res.json(setting))
        .catch(err => res.status(500).json(err));
};

module.exports = {
    getTime,
    create,
    update
}