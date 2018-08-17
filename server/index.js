const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()
const { CONNECTION_STRING } = process.env

const app = express();

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.use(bodyParser.json())

const PORT = 4000;
app.listen(PORT, () => console.log(`Battle Cruiser Operational on PORT ${PORT}`))