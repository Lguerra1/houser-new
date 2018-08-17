const express = require ('express')
const bodyParser = require ('body-parser')

const app = express();

app.use(bodyParser.json())

const PORT = 4000;
app.listen(PORT, () => console.log(`Battle Cruiser Operational on PORT ${PORT}`))