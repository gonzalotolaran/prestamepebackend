const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI ?
    process.env.MONGODB_URI :
    'mongodb://localhost:27017/prestamepe'; // Credentials

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.error(err))