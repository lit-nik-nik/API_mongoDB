const mongoose = require("mongoose");

const Settings = mongoose.model('Settings');

const getAll = (req, res) => {
    Settings.find()
        .exec()
        .then(settings => res.json(settings))
        .catch(err => res.status(500).json(err));
};

const getOne = (req, res) => {
    const id = req.params.id;

    Settings.findOne({client_id: id})
        .exec()
        .then(settingUser => res.json(settingUser))
        .catch(err => res.status(500).json(err));
};

const create = (req, res) => {
    const user = {
        client_id: req.body.id,
        client_name: req.body.name,
        select_header: [1,2,3,4,5,6,7,8,9,10,11,12,13],
        number_orders: 100
    }

    Settings.create(user)
        .then(create => res.json(create))
        .catch(err => res.status(500).json(err));
};

const update = (req, res) => {
    Settings.findOneAndUpdate({client_id: req.params.id}, req.body)
        .exec()
        .then(setting => res.json(setting))
        .catch(err => res.status(500).json(err));
};

module.exports = {
    getAll,
    getOne,
    create,
    update
}