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
            get: (v) => v / 100
        },
        expenses: {
            type: mongoose.Types.Currency,
            currency: 'USD',
            get: (v) => v / 100
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
            get: (v) => v / 100
        },
        expenses: {
            type: mongoose.Types.Currency,
            currency: 'USD',
            get: (v) => v / 100
        },
        operationalExpenses: {
            type: mongoose.Types.Currency,
            currency: 'USD',
            get: (v) => v / 100
        },
        nonOperationalExpenses: {
            type: mongoose.Types.Currency,
            currency: 'USD',
            get: (v) => v / 100
        }
    }
)

const KIPSSchema = new mongoose.Schema(
    {
        totalProfit: {
            type: mongoose.Types.Currency,
            currency: 'USD',
            get: (v) => v / 100
        },
        totalRevenue: {
            type: mongoose.Types.Currency,
            currency: 'USD',
            get: (v) => v / 100
        },
        totalExpenses:{
            type: mongoose.Types.Currency,
            currency: 'USD',
            get: (v) => v / 100
        },
        expensesByCategory: {
            type: Map,
            of: {
                type: mongoose.Types.Currency,
                currency: 'USD',
                get: (v) => v / 100
            }
        }, 
        monthlyData: [monthlyData],
        dailyData: [dailyData]
    },
    {timeStamps: true, toJSON: { getters: true } }
)
const KPI = mongoose.model('KPI', KIPSSchema);

module.exports = KPI;