const express = require('express');
const cors = require('cors');
const morgan = require('morgan'); 

const app = express();

// settings
app.set('port', process.env.PORT || 9000);

// middlewares 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev')); // show console messages

// routes
app.get('/api/v1.0', (req,res) => {
    res.send("Bienvenido al Api de PrestamePe");
});
app.use('/api/v1.0/auth', require('./routes/authRoutes'));
app.use('/api/v1.0/distributors', require('./routes/distributorRoutes'));
app.use('/api/v1.0/clients', require('./routes/clientRoutes'));

module.exports = app;