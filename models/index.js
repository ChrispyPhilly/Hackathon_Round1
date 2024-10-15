const mongoose = require('mongoose')
const TypeSchema = require('./type')
const ItemSchema = require('./item')

const Type = mongoose.model('Type', TypeSchema)
const Item = mongoose.model('Item', ItemSchema)

module.exports = {
    Type,
    Item
}