const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const dotenv = require('dotenv');

const connectDB = require('./config/db');
const paypalRoutes = require('./routes/paypal.routes');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/paypal', paypalRoutes);

app.use('/', routes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

 
