const express = require('express');
const bodyParser = require('body-parser');
const { getRSSFeeds } = require('./src/controllers/data.controller');
require('./src/db/mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.get('/rss', getRSSFeeds);

const port = process.env.PORT || 3050;
app.set("port", port);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});