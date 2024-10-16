const express = require('express');
const cors = require('cors')
const db = require('./db');
const typeController = require('./controllers/typeController')
const itemController = require('./controllers/itemController')
const bodyParser = require('body-parser')
const logger = require('morgan')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/items', itemController.getAllItems)
app.get('/items/:id', itemController.getItemById)
app.get('/items/search', itemController.searchItemByName)
app.get('/items',itemController.createItem)
app.put('/items/:id', itemController.updateItem)
app.delete('/items/:id', itemController.deleteItem)


app.get('/types', typeController.getAllTypes)
app.get('/types/:id', typeController.getTypeById)
app.get('/types/search', typeController.searchTypeByName)
app.get('/types',typeController.createType)
app.put('/types/:id', typeController.updateType)
app.delete('/types/:id', typeController.deleteType)
