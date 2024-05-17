const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const helmet = require('helmet');
const dotenv = require('dotenv');
const kipRoutes = require('./routes/kpi.routes');
const KPI = require('./models/KIPS.model');
const {kpis} = require('./data/data.js');

const app = express();
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet(helmet.crossOriginResourcePolicy({ policy: "cross-origin"})));
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use('/api', kipRoutes);

mongoose
.connect(process.env.MONGO_URL)
.then(async () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

    // insert data into database once
    // await mongoose.connection.db.dropCollection('kips');
    // await KPI.insertMany(kpis);
}).catch(err => {
    console.log(err);
});