const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Item = new Schema(
    {
       name: {type: String, required: true},
        type: {type: Schema.Types.ObjectId, ref: 'Type'},
        image: {type: String, required: true},
        priceUSD: {type: Number, required: true},
        dimensions: {
            height: {type: String, required: true},
            width:{type: String, required: true},
            length: {type: String},
            depth: {type: String},
            seatHeight: {type: String},
            headboardHeight: {type: String},
            diameter: {type: String},
            }
        ,
        material: {type: String, required: true},
        isInStock: {type: Boolean, required: true},
        stock: {type: Number, required: true}

    },
    {timestamps: true},
)

module.exports = Item