const mongoose = require('mongoose');
const config = require('../../config/config');

// DB Connection Handler

mongoose.Promise = global.Promise;
mongoose.connect(config.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection
    .once('open', () => console.log('connected to rss_db'))
    .on('error', (error) => console.log(error));
