const express = require('express');
const products = require('../models/products.model');

const router = express.Router();

router.get('/products', async(req, res) => {
    try {
        const productRecords = await products.find();
        res.status(200).json(productRecords);
    } catch(err){
        console.log(err);
    }
});

module.exports = router;