const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()

const house_controller = require('./controller')

const app = express();
app.use(bodyParser.json())


//express static
app.use(express.static(`${__dirname}/../build`));

app.get('/api/houses', house_controller.read)
app.post('/api/list_house', house_controller.post)



massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

const PORT = 4000;
app.listen(PORT, () => console.log(`Battle Cruiser Operational on PORT ${PORT}`))