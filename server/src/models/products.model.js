const mongoose = require('mongoose');
const { loadType } = require('mongoose-currency');

loadType(mongoose);

const productSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    price: {
        type: mongoose.Types.Currency,
        currency: 'USD',
            get: (v) => v / 1000
    }, 
    expence: {
        type: mongoose.Types.Currency,
        currency: 'USD',
            get: (v) => v / 1000
    }, 
    transactions: {
        type: Array,
        default: []
    }
});

const products = mongoose.model('Product', productSchema);

module.exports = products;