const express = require('express');
const {
    getBps,
    getBp,
    createBp,
    deleteBp,
} = require('../controllers/bpController');

const router = express.Router();

// get all bps
router.get('/', getBps);

// get a single bp
router.get('/:id', getBp);

// create a new bp
router.post('/', createBp);

// delete a bp
router.delete('/:id', deleteBp);

// update a bp entry
// TODO
// router.patch('/:id', updateBp)

module.exports = router;
