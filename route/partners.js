const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// @route       GET api/partners
// @desc        Get partners in that proximity
// @access     Public

router.get('/', async (req, res) => {
    try {
        fs.readFile(path.join('partners.json'), 'utf8', (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data));
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
