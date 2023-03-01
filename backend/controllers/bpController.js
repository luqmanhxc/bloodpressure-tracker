const BP = require('../models/bpModel');
const mongoose = require('mongoose');

// get all bps
const getBps = async (req, res) => {
    const bps = await BP.find({}).sort({ createdAt: -1 });
    res.status(200).json(bps);
};

// get a single bp
const getBp = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such bp id' });
    }

    const bp = await BP.findById(id);

    if (!bp) {
        return res.status(404).json({ error: 'No such bp id' });
    }

    res.status(200).json(bp);
};

// create a new bp
const createBp = async (req, res) => {
    const { systolic, diastolic, pulserate } = req.body;

    // check empty input
    let emptyFields = [];
    if (!systolic) {
        emptyFields.push('systolic');
    }
    if (!diastolic) {
        emptyFields.push('diastolic');
    }
    if (!pulserate) {
        emptyFields.push('pulserate');
    }
    if (emptyFields.length) {
        return res
            .status(400)
            .json({ error: 'Please fill in all the fields', emptyFields });
    }

    // add document to db
    try {
        const bp = await BP.create({
            systolic,
            diastolic,
            pulserate,
        });
        res.status(200).json(bp);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete a bp
const deleteBp = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such bp id' });
    }

    const bp = await BP.findOneAndDelete({ _id: id });

    if (!bp) {
        return res.status(404).json({ error: 'No such bp id' });
    }

    res.status(200).json(bp);
};

// update bp
// TODO

module.exports = {
    getBps,
    getBp,
    createBp,
    deleteBp,
};
