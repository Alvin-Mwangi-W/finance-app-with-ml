const express = require('express');
const KPI = require('../models/KIPS.model');

const router = express.Router();

router.get('/kips', async(req, res) => {
    try {
        const kpis = await KPI.find();
        res.status(200).json(kpis);
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router;
