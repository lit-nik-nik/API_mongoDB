const mongoose = require("mongoose");

const City = mongoose.model('City');

const getAll = (req, res) => {
    City.find()
        .exec()
        .then(settings => res.json(settings))
        .catch(err => res.status(500).json(err));
};

const getOne = (req, res) => {
    const id = req.params.id;

    City.findOne({order_id: id})
        .exec()
        .then(settingUser => res.json(settingUser))
        .catch(err => res.status(500).json(err));
};

const create = (req, res) => {

    const id = +req.body.order.match(/^\d+/)[0];

    const newCity = {
        order_id: id,
        order_name: req.body.order,
        delivery_сity: req.body.city,
    }

    City.create(newCity)
        .then(create => res.json(create))
        .catch(err => res.status(500).json(err));
};

const update = (req, res) => {
    City.findOneAndUpdate({order_id: req.params.id}, req.body)
        .exec()
        .then(setting => res.json(setting))
        .catch(err => res.status(500).json(err));
};

const remove = (req, res) => {
    City.deleteOne({order_id: req.params.id})
        .exec()
        .then(deleteCity => res.json(deleteCity))
        .catch(err => res.status(500).json(err));
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}