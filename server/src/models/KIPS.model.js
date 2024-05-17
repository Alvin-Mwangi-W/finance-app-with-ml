const mongoose = require('mongoose');
const { loadType } = require('mongoose-currency');

loadType(mongoose);

const dailyData = new mongoose.Schema(
    {
        date: {
            type: Date,
        },
        revenue: {
            type: mongoose.Types.Currency,
            currency: 'USD',
            get: (v) => v / 1000
        },
        expenses: {
            type: mongoose.Types.Currency,
            currency: 'USD',
            get: (v) => v / 1000
        }
    }
)

const monthlyData = new mongoose.Schema(
    {
        month: {
            type: String,
        },
        revenue: {
            type: mongoose.Types.Currency,
            currency: 'USD',
            get: (v) => v / 1000
        },
        expenses: {
            type: mongoose.Types.Currency,
            currency: 'USD',
            get: (v) => v / 1000
        },
        operationalExpenses: {
            type: mongoose.Types.Currency,
            currency: 'USD',
            get: (v) => v / 1000
        },
        nonOperationalExpenses: {
            type: mongoose.Types.Currency,
            currency: 'USD',
            get: (v) => v / 1000
        }
    }
)

const KIPSSchema = new mongoose.Schema(
    {
        totalProfit: {
            type: mongoose.Types.Currency,
            currency: 'USD',
            get: (v) => v / 1000
        },
        totalRevenue: {
            type: mongoose.Types.Currency,
            currency: 'USD',
            get: (v) => v / 1000
        },
        totalExpenses:{
            type: mongoose.Types.Currency,
            currency: 'USD',
            get: (v) => v / 1000
        },
        expensesByCategory: {
            type: Map,
            of: {
                type: mongoose.Types.Currency,
                currency: 'USD',
                get: (v) => v / 1000
            }
        }, 
        monthlyData: [monthlyData],
        dailyData: [dailyData]
    },
    {timeStamps: true, toJSON: { getters: true } }
)
const KPI = mongoose.model('KPI', KIPSSchema);

module.exports = KPI;