const express = require('express');
const cors = require('cors')
const db = require('./db');
const typeController = require('./controllers/typeController')
const itemController = require('./controllers/itemController')
const bodyParser = require('body-parser')
const logger = require('morgan')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

app.use(cors())
const app = express();
app.use(logger('dev'))
app.use(bodyParser.json())
// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
