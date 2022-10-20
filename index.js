const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/config');
console.log(config.database.uri);

mongoose.connect(config.database.uri, (err) => {
    if (err) {
        console.log('Could NOT connect to database: ', err);
    } else {
        console.log('Connected to database ');
    }
}
);

app.use(cors());
app.use(express.json());

app.listen(config.server.port, () => {
    console.log('Listening on port ' + config.server.port);
});